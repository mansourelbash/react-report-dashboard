import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import fullReducer from './fullSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    full: fullReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
