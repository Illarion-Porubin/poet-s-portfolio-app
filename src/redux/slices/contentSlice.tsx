import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../http/index";
import { Content, NewContent, SendEmail } from '../../types/types';

export const fetchGetContetn = createAsyncThunk<Content, undefined, { rejectValue: string }>(
  "api/fetchGetContetn", async (_, { rejectWithValue }) => {
    const { data } = await axios.get("/api/content");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: Content = data
    return content;
  });

export const fetchUpdateContent = createAsyncThunk<Content, NewContent, { rejectValue: string }>(
  "api/fetchUpdateContent",
  async (params, { rejectWithValue }) => {
    const { data }: { data: any } = await axios.put("/api/content", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: Content = data
    return content;
  }
);

export const fetchSendMaeesage = createAsyncThunk<Content, SendEmail, { rejectValue: string }>(
  "api/fetchUpdateContent",
  async (params, { rejectWithValue }) => {
    const { data }: { data: any } = await axios.post("/api/message", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: Content = data
    return content;
  }
);

export type ContentState = {
  data: Content | null;
  newData: Content | {};
  isLoading: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: ContentState = {
  data: null,
  newData: {},
  isLoading: "idle",
  error: null,
}

export const contentSlice = createSlice({
  name: 'mainContent',
  initialState,
  reducers: {
    saveContent: (state, action) => {
      state.newData = { ...state.newData, ...action.payload }
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