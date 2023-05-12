import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../http/index';
import { Poem } from '../../types/types';

export const fetchGetPoems = createAsyncThunk<Poem, number | undefined, { rejectValue: string }>('api/fetchGetPoems', async (page: number | undefined, { rejectWithValue }) => {
    const chackPage = page ? page : 1
    const { data }: any = await axios.get('/api/poems?p=' + chackPage)
    if (!data) {
        return rejectWithValue('Server Error!');
    }
    const poem: Poem = data;
    return poem;
});

export const fetchSearchPoems = createAsyncThunk<Poem, string, { rejectValue: string }>('api/fetchSearchPoems', async (value: string, { rejectWithValue }) => {
    const { data }: any = await axios.get('/api/search/poem/' + value)
    if (!data) {
        return rejectWithValue('Server Error!');
    }
    const poem: Poem = data;
    return poem;
});

export const fetchPostPoem = createAsyncThunk<Poem, Poem, { rejectValue: string }>(
    "api/fetchPostPoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.post("/api/poem", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const poem: Poem = data;
        return poem;
    });

export const fetchUpdatePoem = createAsyncThunk<Poem, Poem, { rejectValue: string }>(
    "api/fetchUpdatePoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.put("/api/poem", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const poem: Poem = data;
        return poem;
    });

export const fetchDeletePoem = createAsyncThunk<Poem, string, { rejectValue: string }>(
    "api/fetchDeletePoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.delete("/api/poem/" + params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const poem: Poem = data;
        return poem;
    });

export type ContentPoem = {
    data: Poem[] | [];
    pages: number;
    isLoading: "idle" | "loading" | "loaded" | "error";
    error: string | null;
}

const initialState: ContentPoem = {
    data: [],
    pages: 1,
    isLoading: "idle",
    error: null,
}

export const poemSlice = createSlice({
    name: 'poem',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            ///fetchGetPoems
            .addCase(fetchGetPoems.pending, (state) => {
                state.data = [];
                state.isLoading = 'loading';
            })
            .addCase(fetchGetPoems.fulfilled, (state, action) => {
                state.data = [action.payload];
                state.isLoading = 'loaded';
            })
            .addCase(fetchGetPoems.rejected, (state) => {
                state.data = [];
                state.isLoading = 'error';
            })
            ///fetchSearchPoems
            .addCase(fetchSearchPoems.pending, (state) => {
                state.data = [];
                state.isLoading = 'loading';
            })
            .addCase(fetchSearchPoems.fulfilled, (state, action) => {
                state.data = [action.payload];
                state.isLoading = 'loaded';
            })
            .addCase(fetchSearchPoems.rejected, (state) => {
                state.data = [];
                state.isLoading = 'error';
            })
            ///fetchPostPoem
            .addCase(fetchPostPoem.pending, (state) => {
                state.data = [];
                state.isLoading = "loading";
            })
            .addCase(fetchPostPoem.fulfilled, (state, action) => {
                state.data = [action.payload];
                state.isLoading = "loaded";
            })
            .addCase(fetchPostPoem.rejected, (state) => {
                state.data = [];
                state.isLoading = "error";
            })
            ///fetchUpdatePoem
            .addCase(fetchUpdatePoem.pending, (state) => {
                state.data = [];
                state.isLoading = "loading";
            })
            .addCase(fetchUpdatePoem.fulfilled, (state, action) => {
                state.data = [action.payload];
                state.isLoading = "loaded";
            })
            .addCase(fetchUpdatePoem.rejected, (state) => {
                state.data = [];
                state.isLoading = "error";
            })
    }
})

export default poemSlice.reducer