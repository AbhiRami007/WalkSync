export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}

export interface AppData {
  activeUser: User | undefined;
}

export interface SignUpUserParams {
  fullName: string;
  email: string;
  password: string;
  weight: string;
  height: string;
}