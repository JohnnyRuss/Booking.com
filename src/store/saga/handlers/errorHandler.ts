import { put } from "redux-saga/effects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

class AppError extends Error {
  response;

  constructor() {
    super();
    this.response = {
      data: {
        message: "",
      },
    };

    Object.setPrototypeOf(this, AppError.prototype);
  }
}

type ErrorT = AppError;
interface AppErrorT {
  error: ErrorT;
  setter?: ActionCreatorWithPayload<any>;
  setterParams?: any;
  location: string;
}

export function* showError({
  error,
  setter,
  setterParams,
  location,
}: AppErrorT) {
  if (setter)
    yield put(
      setter({
        ...setterParams,
        message: error.response?.data.message || setterParams.message,
      })
    );

  if (process.env.REACT_APP_ENV_MODE !== "DEV") return;

  console.log({
    error: true,
    location: `sagaHandler - ${location}`,
    message: error.response?.data.message || error.message,
    err: error,
    stack: error.stack,
  });
}

export function* triggerError(loadMs: number = 1000) {
  yield new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("triggered new error"));
    }, loadMs);
  });
}
