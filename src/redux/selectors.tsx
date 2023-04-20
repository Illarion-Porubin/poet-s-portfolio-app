import { AppState } from './store';
export const selectAuthData = (state: AppState) => state.authReducer;
export const selectContentData = (state: AppState) => state.contentReducer;



