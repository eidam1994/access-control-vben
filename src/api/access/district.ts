import { defHttp } from '/@/utils/http/axios';

enum Api {
  PersonPageList = '/manage/user/page',
  AuditPageList = '/manage/info/page',
  AuditHandle = '/manage/info/auditStatus',
  ControlPageList = '/manage/rekDevice/page',
  ControlLogPageList = '/manage/rekLog/page',
  ControlHandle = '/manage/rekDevice',
  ControlList = '/manage/rekDevice/getList',
  BuildingPageList = '/manage/building/page',
  BuildingHandle = '/manage/building',
  NoticePageList = '/manage/notice/page',
  NoticeHandle = '/manage/notice',
}

export const getPersonListByPage = (params) => defHttp.post({ url: Api.PersonPageList, params });

export const getAuditListByPage = (params) => defHttp.post({ url: Api.AuditPageList, params });

export const auditHouseRegister = (params) => defHttp.post({ url: Api.AuditHandle, params });

export const getControlListByPage = (params) => defHttp.post({ url: Api.ControlPageList, params });

export const getControlLogListByPage = (params) =>
  defHttp.post({ url: Api.ControlLogPageList, params });

export const addControl = (params) => defHttp.post({ url: `${Api.ControlHandle}/save`, params });

export const updateControl = (params) =>
  defHttp.post({ url: `${Api.ControlHandle}/update`, params });

export const deleteControl = (id) => defHttp.post({ url: `${Api.ControlHandle}/delete?ids=${id}` });

export const getControlList = () => defHttp.post({ url: Api.ControlList });

export const getBuildingListByPage = (params) =>
  defHttp.post({ url: Api.BuildingPageList, params });

export const addBuilding = (params) => defHttp.post({ url: `${Api.BuildingHandle}/save`, params });

export const updateBuilding = (params) =>
  defHttp.post({ url: `${Api.BuildingHandle}/update`, params });

export const deleteBuilding = (id) =>
  defHttp.post({ url: `${Api.BuildingHandle}/delete?ids=${id}` });

export const getNoticeListByPage = (params) => defHttp.post({ url: Api.NoticePageList, params });

export const addNotice = (params) => defHttp.post({ url: `${Api.NoticeHandle}/save`, params });

export const updateNotice = (params) => defHttp.post({ url: `${Api.NoticeHandle}/update`, params });

export const deleteNotice = (id) => defHttp.post({ url: `${Api.NoticeHandle}/delete?ids=${id}` });
