<template>
  <div>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'icon-park-outline:audit',
              onClick: handleAudit.bind(null, record),
              ifShow: record.status === '1',
            },
          ]"
        />
      </template>
    </BasicTable>
    <AuditModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { auditColumns, searchFormSchema } from './person.data';
  import { getAuditListByPage } from '/@/api/access/district';
  import { useModal } from '/@/components/Modal';
  import AuditModal from '/@/views/district/person/AuditModal.vue';

  export default defineComponent({
    name: 'AuditManagement',
    components: { BasicTable, TableAction, AuditModal },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '房屋登记审核列表',
        api: getAuditListByPage,
        columns: auditColumns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
        searchInfo: {
          type: 1,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
      });

      const [registerModal, { openModal }] = useModal();
      function handleAudit(record: Recordable) {
        openModal(true, {
          record,
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handleSuccess,
        handleAudit,
        registerModal,
      };
    },
  });
</script>
