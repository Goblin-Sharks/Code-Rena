import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './types';
export function registerUser(dataToSubmit) {
  const request = axios
    .post('/register', dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}
export function loginUser(dataToSubmit) {
  const request = axios
    .post('/login', dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
