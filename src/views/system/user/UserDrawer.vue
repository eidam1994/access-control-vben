<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './user.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { addUser, updateUser } from '/@/api/access/system';

  export default defineComponent({
    name: 'UserDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const isUpdatePassword = ref(true);
      const userId = ref('');
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 90,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: {
          span: 24,
        },
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        isUpdatePassword.value = !!data?.isUpdatePassword;
        changeSchema();
        if (unref(isUpdate)) {
          userId.value = data.record.userId;
          setFieldsValue({
            ...data.record,
            roleId: data.record.roleList[0].roleId,
          });
        }
        if (unref(isUpdatePassword)) {
          userId.value = data.record.userId;
          setFieldsValue({ username: data.record.username });
        }
      });

      const getTitle = computed(() =>
        unref(isUpdate) ? '编辑用户' : unref(isUpdatePassword) ? '修改密码' : '新增用户',
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          if (isUpdate.value || isUpdatePassword.value) {
            await updateUser({ ...values, userId: userId.value });
          } else {
            await addUser(values);
          }
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      const changeSchema = () => {
        if (unref(isUpdate)) {
          updateSchema([
            { field: 'username', componentProps: { disabled: false } },
            { field: 'nickName', ifShow: true },
            { field: 'roleId', ifShow: true },
            { field: 'password', ifShow: false },
            { field: 'confirmPassword', ifShow: false },
          ]);
        } else if (unref(isUpdatePassword)) {
          updateSchema([
            { field: 'username', componentProps: { disabled: true } },
            { field: 'nickName', ifShow: false },
            { field: 'roleId', ifShow: false },
            { field: 'password', ifShow: true },
            { field: 'confirmPassword', ifShow: true },
          ]);
        } else {
          updateSchema([
            { field: 'username', componentProps: { disabled: false } },
            { field: 'nickName', ifShow: true },
            { field: 'roleId', ifShow: true },
            { field: 'password', ifShow: true },
            { field: 'confirmPassword', ifShow: false },
          ]);
        }
      };

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
