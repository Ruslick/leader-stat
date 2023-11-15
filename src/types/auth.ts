export interface SignInValues {
  email: string;
  password: string;
}


export interface Jwt {
  access: string;
  refresh: string;
}


export interface JwtRefreshResponse {
  access: string;
}






export type TokensResponse = Jwt;
