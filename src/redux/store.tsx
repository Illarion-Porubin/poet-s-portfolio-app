import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentReducer from './slices/contentSlice';
import authReducer from './slices/authSlice';


const rootReducer = combineReducers({
  contentReducer,
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type AppState = ReturnType<typeof store.getState>
export type AppStore = typeof store;
export type AppDispath = AppStore['dispatch']