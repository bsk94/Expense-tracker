import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  financeTypes: 'expense' | 'revenue' | 'all';
}

const initialState: InitialState = {
  financeTypes: 'all'
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    currentFinanceCategory: (state, action) => {
      state.financeTypes = action.payload;
    }
  }
});

export const { currentFinanceCategory } = financeSlice.actions;

export default financeSlice.reducer;
