<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';

  import { columns, searchFormSchema } from './person.data';
  import { getPersonListByPage } from '/@/api/access/district';

  export default defineComponent({
    name: 'TenantManagement',
    components: { BasicTable },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '租客列表',
        api: getPersonListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        searchInfo: {
          type: 2,
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
