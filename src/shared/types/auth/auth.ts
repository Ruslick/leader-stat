export interface SignInValues {
  email: string;
  password: string;
}

export interface SignUpValues {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  repeat_password: string;
}

export interface SignUpPassword {
  password: string;
}

export interface Jwt {
  access: string;
  refresh: string;
}

