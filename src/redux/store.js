//store file
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import apis from "./services";
const middlewares = [];
const reducers = {}
apis.forEach((api) => {
  reducers[api.reducerPath] = api.reducer;
  middlewares.push(api.middleware);
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

setupListeners(store.dispatch);