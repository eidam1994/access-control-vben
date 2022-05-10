<template>
  <BasicModal @register="register" v-bind="$attrs" title="Modal Title">
    <Description @register="registerDesc" />
    <template #footer>
      <PopConfirmButton type="primary" title="确认通过审核吗？" @confirm="handleAudit('2')"
        >审核通过</PopConfirmButton
      >
      <PopConfirmButton type="error" title="确认拒绝通过审核吗？" @confirm="handleAudit('3')"
        >审核拒绝</PopConfirmButton
      >
    </template>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PopConfirmButton } from '/@/components/Button';
  import { auditHouseRegister } from '/@/api/access/district';

  export default defineComponent({
    name: 'AuditManagement',
    components: { BasicModal, Description, PopConfirmButton },
    setup(_, { emit }) {
      const detail = ref(null);
      const schema: DescItem[] = [
        {
          field: 'nickName',
          label: '姓名',
        },
        {
          field: 'cardNum',
          label: '身份证号',
        },
        {
          field: 'mobile',
          label: '手机号码',
        },
        {
          field: 'buildingName',
          label: '楼栋号',
        },
        {
          field: 'roomNumber',
          label: '房号',
        },
      ];
      const [register, { closeModal }] = useModalInner(async (data) => {
        detail.value = data.record;
      });
      const [registerDesc] = useDescription({
        title: '审核信息',
        data: detail,
        schema: schema,
        column: { xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      });
      const handleAudit = async (status) => {
        await auditHouseRegister({ id: detail.value.id, status: status });
        closeModal();
        emit('success');
      };
      return {
        register,
        closeModal,
        registerDesc,
        handleAudit,
      };
    },
  });
</script>
