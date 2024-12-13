export interface User {
  fullName: string;
  email: string;
  weight: string;
  height: string;
  dailyCaloriesIntake: string;
  isLoggedIn: Boolean;
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

export const emptyUser: User = {
  fullName: "",
  email: "",
  weight: "",
  height: "",
  dailyCaloriesIntake: "",
  isLoggedIn: false,
}