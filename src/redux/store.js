import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userReducer from "./userSlice";

const persistConfig = {
  key: "user",
  storage,
  blacklist: [],
};

const ini = { a: null, b: null };
const userReducer = createSlice({
  name: "user",
  ini,
  reducers: {
    changePart: (state, { payload }) => {
      state.part += payload;
    },
  },
}).reducer;
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
  ],
});

export const persistor = persistStore(store);
