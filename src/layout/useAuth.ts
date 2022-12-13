import { queryCurrentUser } from "@/api/user";
import { setUser } from "@/store/features/user";
import { useMount } from "ahooks";
import { useDispatch } from 'react-redux';


export  function useAuth() {
  const dispatch = useDispatch();
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
      window.location.href = window.location.href.split('?')[0]??''
    }
  }

  useMount(() => {
    checkLogin();
    getUserData();
  });
}