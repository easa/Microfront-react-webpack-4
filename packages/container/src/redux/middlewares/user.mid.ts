import type { Middleware } from "redux";

export const login: Middleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === "USER_LOGIN") {
    
  }
};

export const logout: Middleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === "USER_LOGOUT") {
    
  }
};

export const userMiddleware = [login, logout];
