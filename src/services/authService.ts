import { AxiosResponse } from 'axios';
import { SigninPayload, SigninResponse } from 'types/signin';
import { SignupPayload } from 'types/signupPayload';

import { baseService } from './baseService';

export const authApi = {
  login: '/auth/login',
  signup: '/auth/signup',
};

export function login(values: SigninPayload): Promise<AxiosResponse<SigninResponse>> {
  return baseService.post(authApi.login, values);
}

export function signup(values: SignupPayload): Promise<AxiosResponse<void>> {
  return baseService.post(authApi.signup, values);
}
