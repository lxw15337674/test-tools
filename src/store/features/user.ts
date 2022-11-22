
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  value: number;
  title: string
}
const initialState: UserState = {
  value: 0,
  title: "redux toolkit pre"
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state) => {
      state.value += 1;
    },
  },
});

export const { setUser } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;
