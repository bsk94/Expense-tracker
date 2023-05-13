import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isUser: boolean | null;
}

const initialState: InitialState = {
  isUser: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      console.log('ggg', action.payload);
      console.log('vvvv', state.isUser);
      state.isUser = action.payload;
    }
  }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
