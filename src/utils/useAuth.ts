import { checkLogin, queryCurrentUser } from "@/api/user";
import { useLocalStorageState, useMount } from "ahooks";





export  function useAuth() {
  const [user, setUser] = useLocalStorageState<string | undefined>('user');
  useMount(() => {
    //  checkLogin().then((res) => {
    //   debugger
    //    if(res){

    //    }
    //  });
    var searchStr = location.search;
    if (searchStr === '') {
      if(!user){
        const { origin } = window.location;
        window.location.href = `https://kuauth.kujiale.com/loginpage?backurl=${origin}`;
      }else{
        return 
      }
    }
    const args = new URLSearchParams(location.search);
    const token = args.get('token');
    if(token){
    document.cookie = 'qunheinternalsso=' + decodeURIComponent(token);
    queryCurrentUser().then((res) => {
      debugger;
    });
    }
  });
}