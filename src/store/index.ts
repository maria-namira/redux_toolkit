import {configureStore} from '@reduxjs/toolkit';
import fieldReducer from '../slices/changeFieldsSlice'

export const store = configureStore({
  reducer: {
    field: fieldReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;