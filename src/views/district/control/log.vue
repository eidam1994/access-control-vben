<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';

  import { logColumns, searchFormSchema } from './control.data';
  import { getControlLogListByPage } from '/@/api/access/district';

  export default defineComponent({
    name: 'ControlLogManagement',
    components: { BasicTable },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '开门记录列表',
        api: getControlLogListByPage,
        columns: logColumns,
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
