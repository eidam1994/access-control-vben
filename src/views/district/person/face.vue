<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';

  import { faceColumns, searchFormSchema } from './person.data';

  export default defineComponent({
    name: 'FaceManagement',
    components: { BasicTable },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '人脸信息列表',
        // api: getPersonListByPage,
        columns: faceColumns,
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
