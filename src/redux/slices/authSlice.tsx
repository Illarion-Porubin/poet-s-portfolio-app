import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo, IAdmin } from "../../types/types";
import axios from "../../http/index";

export const fetchRegister = createAsyncThunk<{ status: number, message: string}, { email: string, password: string, confPass: string, securePass: string }, { rejectValue: { status: number, message: string} }>(
  "api/fetchRegister", async (params, { rejectWithValue }) => {
    const { data }: { data: {status: number, message: string} } = await axios.post("/api/registration", params);
    if (!data) {
      return rejectWithValue({status: 401, message: "Registarion error"});
    }
    return data;
  });

export const fetchLogin = createAsyncThunk<IAdmin, { email: string, password: string }, { rejectValue: string }>(
  "api/fetchLogin", async (params, { rejectWithValue }) => {
    const { data }: { data: IAdmin } = await axios.post("/api/login", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: IAdmin = data
    return auth;
  }
);

export const fetchAuthMe = createAsyncThunk<IAdmin, void, { rejectValue: string }>(
  "api/fetchAuthMe", async (_, { rejectWithValue }) => {
    const { data }: { data: IAdmin } = await axios.get("/api/me");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: IAdmin = data
    return auth;
  }
);

export const fetchUpdateInfo = createAsyncThunk<IAdmin, IUserInfo, { rejectValue: string }>(
  "api/fetchUpdateInfo",
  async (params, { rejectWithValue }) => {
    const { data }: { data: IAdmin } = await axios.put("/api/update", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: IAdmin = data
    return auth;
  }
);

export const fetchDeleteAvatar = createAsyncThunk<IAdmin, string, { rejectValue: string }>(
  "api/fetchDeleteAvatar",
  async (id, { rejectWithValue }) => {
    const { data }: { data: IAdmin } = await axios.delete("/api/avatar/" + id);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: IAdmin = data
    return auth;
  }
);



export type AuthState = {
  data: IAdmin | null;
  isLoading: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: AuthState = {
  data: null,
  isLoading: "idle",
  error: null,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      ///fetchLogin
      .addCase(fetchLogin.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
      ///fetchAuthMe
      .addCase(fetchAuthMe.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
      ///catch errors
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.type;
        state.isLoading = "error"
      })
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}