import { AppState } from './store';
export const selectAuthData = (state: AppState) => state.authReducer;
export const selectPoemData = (state: AppState) => state.poemReducer;
export const selectContentData = (state: AppState) => state.contentReducer;
export const selectArticleData = (state: AppState) => state.articleReducer;


