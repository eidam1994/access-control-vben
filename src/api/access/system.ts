import { defHttp } from '/@/utils/http/axios';

enum Api {
  RoleList = '/admin/role/list',
  RolePageList = '/admin/role/page',
  RoleHandle = '/admin/role',
  UserPageList = '/admin/user/page',
  UserHandle = '/admin/user',
  UserUpdate = '/admin/user/editPassword',
}

export const getRoleListByPage = (params) => defHttp.get({ url: Api.RolePageList, params });

export const addRole = (params) => defHttp.post({ url: Api.RoleHandle, params });

export const updateRole = (params) => defHttp.put({ url: Api.RoleHandle, params });

export const deleteRole = (roleId) => defHttp.delete<any>({ url: `${Api.RoleHandle}/${roleId}` });

export const getUserListByPage = (params) => defHttp.get({ url: Api.UserPageList, params });

export const addUser = (params) => defHttp.post({ url: Api.UserHandle, params });

export const updateUser = (params) => defHttp.put({ url: Api.UserUpdate, params });

export const deleteUser = (userId) => defHttp.delete({ url: `${Api.UserHandle}/${userId}` });

export const getRoleList = () => defHttp.get({ url: Api.RoleList });
