export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  COMPANY_ACCOUNT = 'COMPANY_ACCOUNT'
}

export interface AuthenticatedUser {
  authenticated: true;
  username: string;
  role: Role;
  id: number;
}

export interface AnonymousUser {
  authenticated: false;
  username: null;
  role: null;
  id: null;
}

export type CurrentUser = AuthenticatedUser | AnonymousUser;
