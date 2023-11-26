import { Jwt } from "./auth";

export interface JwtRefreshDTO {
  access: string;
}

export type TokensDTO = Jwt;
