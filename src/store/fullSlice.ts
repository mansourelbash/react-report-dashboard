// src/store/fullSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FullState {
  full: boolean;
}

const initialState: FullState = {
  full: false,
};

const fullSlice = createSlice({
  name: 'full',
  initialState,
  reducers: {
    setFull: (state, action: PayloadAction<boolean>) => {
      state.full = action.payload;
    },
  },
});

export const { setFull } = fullSlice.actions;

export default fullSlice.reducer;
