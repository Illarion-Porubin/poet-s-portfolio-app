import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { AdminTypes, UserTypes } from "../../types/types";
import axios from "../../http/index";

export const fetchRegister = createAsyncThunk<UserTypes, UserTypes, { rejectValue: string }>(
  "api/fetchRegister", async (params, { rejectWithValue }) => {
    const { data }: { data: UserTypes } = await axios.post("/api/register", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: UserTypes = data
    return auth;
  });

export const fetchLogin = createAsyncThunk<UserTypes, { email: string, password: string }, { rejectValue: string }>(
  "api/fetchLogin", async (params, { rejectWithValue }) => {
    const { data }: { data: UserTypes } = await axios.post("/api/login", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: UserTypes = data
    return auth;
  }
);

export const fetchAuthMe = createAsyncThunk<UserTypes, void, { rejectValue: string }>(
  "api/fetchAuthMe", async (_, { rejectWithValue }) => {
    const { data }: { data: UserTypes } = await axios.get("/api/me");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: UserTypes = data
    return auth;
  }
);

export const fetchUpdateInfo = createAsyncThunk<UserTypes, AdminTypes, { rejectValue: string }>(
  "api/fetchUpdateInfo",
  async (params, { rejectWithValue }) => {
    const { data }: { data: UserTypes } = await axios.put("/api/update", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: UserTypes = data
    return auth;
  }
);

export const fetchDeleteAvatar = createAsyncThunk<UserTypes, string, { rejectValue: string }>(
  "api/fetchDeleteAvatar",
  async (id, { rejectWithValue }) => {
    const { data }: { data: UserTypes } = await axios.delete("/api/avatar/" + id);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const auth: UserTypes = data
    return auth;
  }
);



export type AuthState = {
  data: UserTypes | null;
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
      ///fetchRegister
      .addCase(fetchRegister.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
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