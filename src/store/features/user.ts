
import { createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  name: string;
  avatar:string;
}

const initialState: UserInfo = {
  name: '',
  avatar:''
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,{payload}) => {
      state.avatar = payload.avatar;
      state.name = payload.nameZh;
    },
  },
});

export const { setUser } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;
