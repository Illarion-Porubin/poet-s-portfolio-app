import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../http/index";
import { ContentT, NewContent, SendEmail } from '../../types/types';

export const fetchGetContetn = createAsyncThunk<ContentT, undefined, { rejectValue: string }>(
  "api/fetchGetContetn", async (_, { rejectWithValue }) => {
    const { data } = await axios.get("/api/content");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: ContentT = data
    return content;
  });

export const fetchUpdateContent = createAsyncThunk<ContentT, ContentT, { rejectValue: string }>(
  "api/fetchUpdateContent",
  async (params, { rejectWithValue }) => {
    const { data }: { data: any } = await axios.patch(`/api/content/${params.id}`, params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: ContentT = data
    return content;
  }
);

export const fetchSendMaeesage = createAsyncThunk<ContentT, SendEmail, { rejectValue: string }>(
  "api/fetchUpdateContent",
  async (params, { rejectWithValue }) => {
    const { data }: { data: any } = await axios.post("/api/message", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: ContentT = data
    return content;
  }
);

export type ContentState = {
  data: ContentT | null;
  newData: ContentT | null;
  isLoading: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: ContentState = {
  data: null,
  newData: null,
  isLoading: "idle",
  error: null,
}

export const contentSlice = createSlice({
  name: 'mainContent',
  initialState,
  reducers: {
    saveContent: (state, action) => {
      state.newData = { ...state.data, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder
      ///fetchGetContetn
      .addCase(fetchGetContetn.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchGetContetn.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchGetContetn.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
      ///fetchUpdateContent
      .addCase(fetchUpdateContent.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchUpdateContent.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchUpdateContent.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
  },
})

export const { saveContent } = contentSlice.actions
export default contentSlice.reducer;