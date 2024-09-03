import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../http/index';
import { Creativity, ICreativityData } from '../../types/types';

export const fetchGetPoems = createAsyncThunk<ICreativityData, number | undefined, { rejectValue: string }>(
    'api/fetchGetPoems', async (page: number | undefined, { rejectWithValue }) => {
    const { data }: {data: ICreativityData } = await axios.get('/api/poems?p=' + page)
    if (!data) {
        return rejectWithValue('Server Error!');
    }
    return data;
});

export const fetchSearchPoems = createAsyncThunk<Creativity[], string, { rejectValue: string }>('api/fetchSearchPoems', async (value: string, { rejectWithValue }) => {
    const { data }: any = await axios.get('/api/search/poem/' + value)
    if (!data) {
        return rejectWithValue('Server Error!');
    }
    const poem: Creativity[] = data;
    return poem;
});

export const fetchPostPoem = createAsyncThunk<Creativity[], Creativity, { rejectValue: string }>(
    "api/fetchPostPoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.post("/api/poem", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const poem: Creativity[] = data;
        return poem;
    });

export const fetchUpdatePoem = createAsyncThunk<Creativity[], Creativity, { rejectValue: string }>(
    "api/fetchUpdatePoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.put("/api/poem", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const poem: Creativity[] = data;
        return poem;
    });

export const fetchDeletePoem = createAsyncThunk<Creativity[], string, { rejectValue: string }>(
    "api/fetchDeletePoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.delete("/api/poem/" + params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        const poem: Creativity[] = data;
        return poem;
    });

export type ContentPoem = {
    data: Creativity[];
    poem: Creativity | null;
    pages: number;
    isLoading: "idle" | "loading" | "loaded" | "error";
    error: string | null;
}

const initialState: ContentPoem = {
    data: [],
    poem: null,
    pages: 1,
    isLoading: "idle",
    error: null,
}

export const poemSlice = createSlice({
    name: 'poem',
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.data.push(action.payload)
            console.log(state.data);
        },
        deltePoem: (state, action) => {
            state.data = state.data.filter((item) => item._id !== action.payload ? item : undefined)
        },
        setPoem: (state, action) => {
            state.poem = action.payload
            console.log(state.poem, 'setPoem');
        },
    },
    extraReducers: (builder) => {
        builder
            ///fetchGetPoems
            .addCase(fetchGetPoems.pending, (state) => {
                state.data = [];
                state.isLoading = 'loading';
            })
            .addCase(fetchGetPoems.fulfilled, (state, action) => {
                state.pages = action.payload.pages;
                state.data = action.payload.data;
                // state.data = action.payload;
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
                state.data = action.payload;
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
                state.data = action.payload;
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
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchUpdatePoem.rejected, (state) => {
                state.data = [];
                state.isLoading = "error";
            })
    }
})

export default poemSlice.reducer