import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import { root } from "./reducers/root";

import { initSagas } from "./saga/initSagas";

const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([sagaMiddleWare]),
});

export type RootStateT = ReturnType<typeof store.getState>;
export type DispatchT = typeof store.dispatch;

initSagas(sagaMiddleWare);
