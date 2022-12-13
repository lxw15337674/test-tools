import request from "@/utils/request";

export async function checkLogin() {
  return request.get('/kaptain/user/checkLogin');
}

export interface UserInfo {
  id: number;
  nameEn: string;
  nameZh: string;
  roleId: number;
  isInvalid: number;
  entryTime: number[];
  isOutsourcing: boolean;
  isAdmin: number;
  position: string;
  mobile: string;
  avatar: string;
  syncTime: string;
  createUser: string;
  createTime: string;
  updateUser: string;
  updateTime: string;
  isInited: number;
  level: string;
  oaId: number;
  isMgr: boolean;
  workCode: number;
  mgrWorkCode: number;
  mgrWorkCodes: string;
  mentorWorkCode: number;
  ehrRoles: string;
  isInterns: boolean;
  email: string;
}

export async function queryCurrentUser() {
  return request.get<{currentUser:UserInfo}>('/kaptain/api/user/current').then(res=>res.currentUser)
}

export async function queryUserLogout() {
  return request.get('/kaptain/api/user/logout');
}
