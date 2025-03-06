import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReduser } from "./filters/filtersSlice";
import { authReducer } from "./auth/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth-data",
  version: 1,
  storage,
  whitelist: ["token"]
};

// const stage = import.meta.env.MODE;

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReduser,
    auth: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  // devTools: stage === "development" ? true : false
});

export const persistor = persistStore(store);
