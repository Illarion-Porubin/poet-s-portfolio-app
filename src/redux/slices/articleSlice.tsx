import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Creativity, ICreativityData } from '../../types/types';
import axios from '../../http/index';


export const fetchGetArticles = createAsyncThunk<ICreativityData, number | undefined, { rejectValue: string }>(
    "api/fetchGetArticles", async (page: number | undefined, { rejectWithValue }) => {
        const { data }: {data: ICreativityData} = await axios.get("/api/articles?p=" + page);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        return data;
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

export const fetchPostArticle = createAsyncThunk<Creativity[], Creativity, { rejectValue: string }>(
    "api/fetchPostArticle", async (params, { rejectWithValue }) => {
        const { data } = await axios.post("/api/article", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const articles: Creativity[] = data;
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
    data: Creativity[];
    article: Creativity | null;
    pages: number;
    isLoading: "idle" | "loading" | "loaded" | "error";
    error: string | null;
}

const initialState: ArticleState = {
    data: [],
    article: null,
    pages: 1,
    isLoading: "idle",
    error: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.data.push(action.payload)
            console.log(state.data);
        },
        delteArticle: (state, action) => {
            state.data = state.data.filter((item) => item._id !== action.payload ? item : undefined)
        },
        setArticle: (state, action) => {
            state.article = action.payload
            console.log(state.article, 'setArticle');
        },
    },
    extraReducers(builder) {
        builder
            // ///fetchGetArticles
            .addCase(fetchGetArticles.pending, (state) => {
                state.data = [];
                state.isLoading = "loading";
            })
            .addCase(fetchGetArticles.fulfilled, (state, action) => {
                state.pages = action.payload.pages;
                state.data = action.payload.data;
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
            .addCase(fetchPostArticle.pending, (state) => {
                state.data = [];
                state.isLoading = "loading";
            })
            .addCase(fetchPostArticle.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchPostArticle.rejected, (state) => {
                state.data = [];
                state.isLoading = "error";
            })
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