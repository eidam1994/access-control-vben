import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/district',
  name: 'District',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    orderNo: 2,
    icon: 'bx:building-house',
    title: '小区管理',
  },
  children: [
    {
      path: 'owner',
      name: 'Owner',
      component: () => import('/@/views/district/person/owner.vue'),
      meta: {
        title: '业主管理',
      },
    },
    {
      path: 'tenant',
      name: 'Tenant',
      component: () => import('/@/views/district/person/tenant.vue'),
      meta: {
        title: '租客管理',
      },
    },
    {
      path: 'audit',
      name: 'Audit',
      component: () => import('/@/views/district/person/audit.vue'),
      meta: {
        title: '房屋登记审核',
      },
    },
    {
      path: 'control',
      name: 'Control',
      component: () => import('/@/views/district/control/index.vue'),
      meta: {
        title: '门禁设备管理',
      },
    },
    {
      path: 'building',
      name: 'Building',
      component: () => import('/@/views/district/building/index.vue'),
      meta: {
        title: '楼栋管理',
      },
    },
    {
      path: 'notice',
      name: 'Notice',
      component: () => import('/@/views/district/notice/index.vue'),
      meta: {
        title: '社区活动管理',
      },
    },
    {
      path: 'log',
      name: 'Log',
      component: () => import('/@/views/district/control/log.vue'),
      meta: {
        title: '开门记录',
      },
    },
    {
      path: 'face',
      name: 'Face',
      component: () => import('/@/views/district/person/face.vue'),
      meta: {
        title: '人脸信息',
      },
    },
    {
      path: 'camera',
      name: 'Camera',
      component: () => import('/@/views/district/control/camera.vue'),
      meta: {
        title: '摄像头管理',
      },
    },
  ],
};

export default dashboard;
