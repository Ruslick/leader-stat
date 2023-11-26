export interface SignInValues {
  email: string;
  password: string;
}

export interface SignUpValues {
  phone: string;
  email: string;
  password: string;
  repeat_password: string;
  username: string;
}

export interface SignUpPassword {
  password: string;
}

export interface Jwt {
  access: string;
  refresh: string;
}

