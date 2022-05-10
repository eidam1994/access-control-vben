import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '门禁名称',
    dataIndex: 'name',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
  },
];

export const logColumns: BasicColumn[] = [
  {
    title: '楼栋名称',
    dataIndex: 'buildingName',
  },
  {
    title: '门禁名称',
    dataIndex: 'rekName',
  },
  {
    title: '开门人姓名',
    dataIndex: 'nickName',
  },
  {
    title: '开门时间',
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '门禁名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '门禁名称',
    required: true,
    component: 'Input',
  },
];
