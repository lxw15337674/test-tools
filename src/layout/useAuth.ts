import { checkLogin, queryCurrentUser } from "@/api/user";
import store, { useAppSelector } from "@/store";
import user, { setUser } from "@/store/features/user";
import { setCookie } from "@/utils/cookie";
import { useLocalStorageState, useMount } from "ahooks";
import { useSelector, useDispatch } from 'react-redux';





export  function useAuth() {
  const dispatch = useDispatch();
  const user = useAppSelector((store) => store.user);
  
  const getUserData = ()=>{
  queryCurrentUser().then((res) => {
    dispatch(setUser(res));
    })
  }

  const checkLogin=()=>{
    let searchStr = location.search;
    if (searchStr === '') {
        return;
    }
    const args = new URLSearchParams(location.search);
    const token = args.get('token');
    if (token) {
      console.log(document.cookie);
      // setCookie('qunheinternalsso', decodeURIComponent(token));
      // document.cookie = 'qunheinternalsso=' + decodeURIComponent(token);
      console.log(document.cookie);
      window.location.href = window.location.href.split('?')[0]??''
    }
  }

  useMount(() => {
    checkLogin();
    getUserData();
  });
}