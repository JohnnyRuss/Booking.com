import * as sagas from "./sagas/index";

export const initSagas = (sagaMiddleware: any) =>
  Object.values(sagas).forEach((saga) => sagaMiddleware.run(saga));
