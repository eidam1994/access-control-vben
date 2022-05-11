<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';

  import { columns, searchFormSchema } from './control.data';

  export default defineComponent({
    name: 'CameraManagement',
    components: { BasicTable },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '摄像头列表',
        // api: getControlLogListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
      });

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handleSuccess,
      };
    },
  });
</script>
