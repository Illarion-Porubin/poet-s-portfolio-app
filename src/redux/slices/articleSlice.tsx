import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../http/index';
import { Articles } from '../../types/types';


export const fetchGetArticles = createAsyncThunk<any, undefined, { rejectValue: string }>(
    "api/fetchGetArticles", async (_, { rejectWithValue }) => {
        const { data } = await axios.get("/api/articles");
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        return data;
    });

export const fetchPostArticle = createAsyncThunk<any, any, { rejectValue: string }>(
    "api/fetchPostArticle", async (params, { rejectWithValue }) => {
        const { data } = await axios.post("/api/article", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        return data;
    });


export type ArticleState = {
    data: [] | Articles[] | null;
    isLoading: "idle" | "loading" | "loaded" | "error";
    error: string | null;
}

const initialState: ArticleState = {
    data: [],
    isLoading: "idle",
    error: null
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            ///fetchGetArticles
            .addCase(fetchGetArticles.pending, (state) => {
                state.data = null;
                state.isLoading = "loading";
            })
            .addCase(fetchGetArticles.fulfilled, (state, action) => {
                console.log(action.payload.articles, 'payload')
                state.data = action.payload.articles;
                state.isLoading = "loaded";
                console.log(state.data, 'state')
            })
            .addCase(fetchGetArticles.rejected, (state) => {
                state.data = null;
                state.isLoading = "error";
            })
            ///fetchPostArticle
            .addCase(fetchPostArticle.pending, (state) => {
                state.data = null;
                state.isLoading = "loading";
            })
            .addCase(fetchPostArticle.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchPostArticle.rejected, (state) => {
                state.data = null;
                state.isLoading = "error";
            })
    }

})

export default articleSlice.reducer;