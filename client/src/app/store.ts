import { configureStore } from '@reduxjs/toolkit';
import financesSlice from '../features/financeSlice';
import authSlice from '../features/authSlice';

export const store = configureStore({
  reducer: {
    finance: financesSlice,
    auth: authSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
