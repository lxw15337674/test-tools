import { checkLogin, queryCurrentUser } from "@/api/user";
import store, { useAppSelector } from "@/store";
import user, { setUser } from "@/store/features/user";
import { useLocalStorageState, useMount } from "ahooks";
import { useSelector, useDispatch } from 'react-redux';





export  function useAuth() {
  const dispatch = useDispatch();
  const user = useAppSelector((store) => store.user);
  
  const getUserData = ()=>{
  queryCurrentUser().then((res) => {
    debugger
    dispatch(setUser(res));
  });
  }

  const checkLogin=()=>{
    let searchStr = location.search;
    if (searchStr === '') {
      if (user) {
        const { origin } = window.location;
        window.location.href = `https://kuauth.kujiale.com/loginpage?backurl=${origin}`;
      } else {
        return;
      }
    }
    const args = new URLSearchParams(location.search);
    const token = args.get('token');
    if (token) {
      document.cookie = 'qunheinternalsso=' + decodeURIComponent(token);
      getUserData()
    }
  }

  useMount(() => {
    checkLogin()
  });
}