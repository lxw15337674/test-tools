// index.ts 文件
import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user";
import { useSelector, TypedUseSelectorHook } from 'react-redux';

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    user,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


// export  const useAppSelector = (selector: RootState) => useSelector<RootState>(selector);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;


