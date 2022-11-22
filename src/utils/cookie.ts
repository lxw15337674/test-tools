/*
 功能：保存cookies函数 
 参数：name，cookie名字；value，值
 */
export function setCookie(name:string, value:string) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}
/*
 功能：获取cookies函数 
 参数：name，cookie名字
 */
export function getCookie(name:string) {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
/*
 功能：删除cookies函数 
 参数：name，cookie名字
 */

export function delCookie(name:string) {
  var exp = new Date(); //当前时间
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}

/*
 功能：删除所有cookie
 参数：name，cookie名字
 */
export function deleteAllCookies() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]??''
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}