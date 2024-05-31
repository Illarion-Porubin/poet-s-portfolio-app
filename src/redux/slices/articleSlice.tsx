import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Creativity } from '../../types/types';
import axios from '../../http/index';


export const fetchGetArticles = createAsyncThunk<Creativity[], undefined, { rejectValue: string }>(
    "api/fetchGetArticles", async (_, { rejectWithValue }) => {
        const { data } = await axios.get("/api/articles");
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const articles: Creativity[] = data;
        return articles;
    });

export const fetchSortArticles = createAsyncThunk<Creativity[], string, { rejectValue: string }>(
    "api/fetchSortArticles", async (params, { rejectWithValue }) => {
        const { data } = await axios.get("/api/articles/" + params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const articles: Creativity[] = data;
        return articles;
    });

export const fetchSearchArticles = createAsyncThunk<Creativity[], string, { rejectValue: string }>('api/fetchSearchArticles', async (value: string, { rejectWithValue }) => {
    const { data } = await axios.get('/api/search/article/' + value);
    if (!data) {
        return rejectWithValue('Server Error!');
    }
    const articles: Creativity[] = data;
    return articles;
});

export const fetchPostArticle = createAsyncThunk<Creativity, Creativity, { rejectValue: string }>(
    "api/fetchPostArticle", async (params, { rejectWithValue }) => {
        const { data } = await axios.post("/api/article", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const articles: Creativity = data;
        return articles;
    });

export const fetchUpdateArticle = createAsyncThunk<Creativity[], Creativity, { rejectValue: string }>(
    "api/fetchUpdateArticle", async (params, { rejectWithValue }) => {
        const { data } = await axios.put("/api/article", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const articles: Creativity[] = data;
        return articles;
    });

export const fetchDeleteArticle = createAsyncThunk<Creativity[], string, { rejectValue: string }>(
    "api/fetchDeleteArticle", async (params, { rejectWithValue }) => {
        const { data } = await axios.delete("/api/article/" + params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const articles: Creativity[] = data;
        return articles;
    });


export type ArticleState = {
    data: [] | Creativity[];
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
            // ///fetchGetArticles
            .addCase(fetchGetArticles.pending, (state) => {
                state.data = [];
                state.isLoading = "loading";
            })
            .addCase(fetchGetArticles.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchGetArticles.rejected, (state) => {
                state.data = [];
                state.isLoading = "error";
            })
            ///fetchSortArticles
            .addCase(fetchSortArticles.pending, (state) => {
                state.data = [];
                state.isLoading = "loading";
            })
            .addCase(fetchSortArticles.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchSortArticles.rejected, (state) => {
                state.data = [];
                state.isLoading = "error";
            })
            ///fetchSearchArticles
            .addCase(fetchSearchArticles.pending, (state) => {
                state.data = [];
                state.isLoading = 'loading';
            })
            .addCase(fetchSearchArticles.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = 'loaded';
            })
            .addCase(fetchSearchArticles.rejected, (state) => {
                state.data = [];
                state.isLoading = 'error';
            })
            ///fetchPostArticle
            // .addCase(fetchPostArticle.pending, (state) => {
            //     state.data = [];
            //     state.isLoading = "loading";
            // })
            // .addCase(fetchPostArticle.fulfilled, (state, action) => {
            //     console.log(action.payload);
            //     state.data = action.payload;
            //     state.isLoading = "loaded";
            // })
            // .addCase(fetchPostArticle.rejected, (state) => {
            //     state.data = [];
            //     state.isLoading = "error";
            // })
            ///fetchUpdateArticle
            .addCase(fetchUpdateArticle.pending, (state) => {
                state.data = [];
                state.isLoading = "loading";
            })
            .addCase(fetchUpdateArticle.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchUpdateArticle.rejected, (state) => {
                state.data = [];
                state.isLoading = "error";
            })
    }

})

export default articleSlice.reducer;