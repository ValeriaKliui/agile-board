export interface AuthErrors {
  login: string | null;
  register: string | null;
  logout: string | null;
  forgot: string | null;
  updatePassword: string | null;
}

export interface RegisterParams {
  email: string;
  password: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface ForgotPasswordParams {
  email: string;
}
