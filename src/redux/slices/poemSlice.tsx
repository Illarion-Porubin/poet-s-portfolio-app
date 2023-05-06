import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../http/index';

// export const fetchGetPoems = createAsyncThunk<any, undefined, { rejectValue: string }>(
//     "api/fetchGetPoems", async (_, { rejectWithValue }) => {
//         const { data } = await axios.get("/api/poems");
//         if (!data) {
//             return rejectWithValue("Server Error!");
//         }
//         return data;
//     });

///////// пофиксить  fetchGetPoems ниже  <---------------

export const fetchGetPoems = createAsyncThunk<any, number | undefined, { rejectValue: string }>('api/fetchGetPoems', async (page: number | undefined, { rejectWithValue }) => {
    const chackPage = page ? page : 1
    const { data }: any = await axios.get('/api/poems?p=' + chackPage)
    if (!data) {
        return rejectWithValue('Server Error!');
    }
    return data;
});

export const fetchSearchPoems = createAsyncThunk<any, string, { rejectValue: string }>('api/fetchSearchPoems', async (value: string, { rejectWithValue }) => {
    const { data }: any =  await axios.get('/api/search/poem/' + value)
    if (!data) {
        return rejectWithValue('Server Error!');
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

export const fetchUpdatePoem = createAsyncThunk<any, any, { rejectValue: string }>(
    "api/fetchUpdatePoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.put("/api/poem", params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        return data;
    });

export const fetchDeletePoem = createAsyncThunk<any, any, { rejectValue: string }>(
    "api/fetchDeletePoem", async (params, { rejectWithValue }) => {
        const { data } = await axios.delete("/api/poem/" + params);
        if (!data) {
            return rejectWithValue("Server Error!");
        }
        return data;
    });



const initialState: any = {
    pages: 1,
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
            // .addCase(fetchGetPoems.pending, (state) => {
            //     state.data = null;
            //     state.isLoading = "loading";
            // })
            // .addCase(fetchGetPoems.fulfilled, (state, action) => {
            //     state.data = action.payload.poems;
            //     state.isLoading = "loaded";
            // })
            // .addCase(fetchGetPoems.rejected, (state) => {
            //     state.data = null;
            //     state.isLoading = "error";
            // })

            ///fetchPaginationPoems
            .addCase(fetchGetPoems.pending, (state) => {
                state.pages = 0;
                state.isLoading = 'loading';
            })
            .addCase(fetchGetPoems.fulfilled, (state, action) => {
                state.pages = action.payload.pages;
                state.data = action.payload.poems;
                state.isLoading = 'loaded';
            })
            .addCase(fetchGetPoems.rejected, (state) => {
                state.pages = 0;
                state.isLoading = 'error';
            })
            ///fetchSearchPoems
            .addCase(fetchSearchPoems.pending, (state) => {
                state.pages = 0;
                state.isLoading = 'loading';
            })
            .addCase(fetchSearchPoems.fulfilled, (state, action) => {
                console.log(action.payload, 'action.payload')
                state.data = action.payload;
                state.isLoading = 'loaded';
            })
            .addCase(fetchSearchPoems.rejected, (state) => {
                state.pages = 0;
                state.isLoading = 'error';
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
            ///fetchUpdatePoem
            .addCase(fetchUpdatePoem.pending, (state) => {
                state.data = null;
                state.isLoading = "loading";
            })
            .addCase(fetchUpdatePoem.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = "loaded";
            })
            .addCase(fetchUpdatePoem.rejected, (state) => {
                state.data = null;
                state.isLoading = "error";
            })
    }
})

export default poemSlice.reducer