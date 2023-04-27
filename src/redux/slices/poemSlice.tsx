import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../http/index';

export const fetchGetPoems = createAsyncThunk<any, undefined, { rejectValue: string }>(
    "api/fetchGetPoems", async (_, { rejectWithValue }) => {
        const { data } = await axios.get("/api/poems");
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        return data;
    });

export const fetchPostPoem = createAsyncThunk<any, any, { rejectValue: string }>(
    "api/fetchPostPoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.post("/api/poem", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        return data;
    });



const initialState: any = {
    data: [],
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
                state.data = null;
                state.isLoading = "loading";
            })
            .addCase(fetchGetPoems.fulfilled, (state, action) => {
                // console.log(action.payload.poems)
                state.data = action.payload.poems;
                state.isLoading = "loaded";
                // console.log(state.data)
            })
            .addCase(fetchGetPoems.rejected, (state) => {
                state.data = null;
                state.isLoading = "error";
            })
            ///fetchPostPoem
            .addCase(fetchPostPoem.pending, (state) => {
                state.data = null;
                state.isLoading = "loading";
            })
            .addCase(fetchPostPoem.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchPostPoem.rejected, (state) => {
                state.data = null;
                state.isLoading = "error";
            })
    }
})

export default poemSlice.reducer