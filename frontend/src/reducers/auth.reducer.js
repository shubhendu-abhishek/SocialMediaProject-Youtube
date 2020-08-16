import {
  AUTH_FORM_SUCCESS,
  AUTH_FORM_FAIL,
  AUTH_ERROR,
  USER_IS_LOADED,
  LOG_OUT,
} from "../constants/auth.constants";

const initialState = {
  token: localStorage.getItem("token"),
  users: {},
  user: {},
  errors: {},
  isLoggedIn: false,
  isAllowedToChangePassword: false,
  isPasswordChanged: false,
  isLoading: false,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_FORM_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        isAllowedToChangePassword: false,
        isPasswordChanged: false,
        isLoading: false,
        errors: {},
      };
    case AUTH_FORM_FAIL:
    case AUTH_ERROR:
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        ...payload,
        errors: payload,
        users: {},
        user: {},
        isLoggedIn: false,
        isAllowedToChangePassword: false,
        isPasswordChanged: false,
        isLoading: false,
      };
    case USER_IS_LOADED:
      localStorage.getItem("token");
      return {
        ...state,
        ...payload,
        users: {},
        user: payload,
        errors: {},
        isLoggedIn: true,
        isAllowedToChangePassword: false,
        isPasswordChanged: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default auth;
