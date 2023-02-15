import { configureStore } from '@reduxjs/toolkit';
import financesSlice from '../features/financeSlice';

export const store = configureStore({
  reducer: {
    finance: financesSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
