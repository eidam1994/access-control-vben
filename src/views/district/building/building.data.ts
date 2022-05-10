import { BasicColumn, FormSchema } from '/@/components/Table';
import { getControlList } from '/@/api/access/district';

export const columns: BasicColumn[] = [
  {
    title: '楼栋名称',
    dataIndex: 'name',
  },
  {
    title: '绑定门禁名称',
    dataIndex: 'rekName',
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

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '楼栋名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '楼栋名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'rekId',
    label: '门禁设备',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getControlList,
      resultField: 'data',
      labelField: 'name',
      valueField: 'id',
    },
  },
];
