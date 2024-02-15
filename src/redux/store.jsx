import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./combineReducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persitConfig = {
  key: "root",
  storage: storage, //browser localStorage
};

const persistedReducer = persistReducer(persitConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persitor = persistStore(store);

export { store, persitor };
