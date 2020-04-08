export enum Role {
  ADMIN,
  USER,
  COMPANY_ACCOUNT
}

export interface AuthenticatedUser {
  authenticated: true;
  username: string;
  role: Role;
  userId: number;
}

export interface AnonymousUser {
  authenticated: false;
  username: null;
  role: null;
  userId: null;
}

export type CurrentUser = AuthenticatedUser | AnonymousUser;
