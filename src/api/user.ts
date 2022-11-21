import request from "@/utils/request";

export async function checkLogin() {
  return request.get('/BimToolApi/user/checkLogin');
}

export async function queryCurrentUser() {
  return request.get('/kaptain/api/user/current');
}

export async function queryUserLogout() {
  return request.get('/BimToolApi/user/logout');
}
