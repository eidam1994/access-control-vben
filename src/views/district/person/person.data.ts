import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'nickName',
  },
  {
    title: '身份证号',
    dataIndex: 'cardNum',
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
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

export const auditColumns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'nickName',
  },
  {
    title: '身份证号',
    dataIndex: 'cardNum',
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
  },
  {
    title: '楼栋名称',
    dataIndex: 'buildingName',
  },
  {
    title: '房号',
    dataIndex: 'roomNumber',
  },
  {
    title: '审核状态',
    dataIndex: 'status',
    customRender: ({ record }) => {
      const status = record.status;
      const color = status == '1' ? 'blue' : status == '2' ? 'green' : 'red';
      const text = status == '1' ? '待审核' : status == '2' ? '审核通过' : '审核不通过';
      return h(Tag, { color: color }, () => text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'nickName',
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
];
