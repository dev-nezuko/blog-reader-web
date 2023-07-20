import { SigninPayload } from './signinPayload';

export type SignupPayload = {
  name: string;
} & SigninPayload;
