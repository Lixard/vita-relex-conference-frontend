export enum Role {
  ADMIN,
  USER,
  COMPANY_ACCOUNT
}

export interface AuthenticatedUser {
  authenticated: true;
  username: string;
  role: Role;
}

export interface AnonymousUser {
  authenticated: false;
  username: null;
  role: null;
}

export type CurrentUser = AuthenticatedUser | AnonymousUser;
