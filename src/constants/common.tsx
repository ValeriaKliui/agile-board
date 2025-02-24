import { DefaultTabInfo } from "@shared/types";

const {
  VITE_AVATARS_DB_NAME,
  VITE_USERS_DB_NAME,
  VITE_UPLOAD_PRESET,
  VITE_UPLOAD_URL,
  VITE_AVATARS_PATH,
  VITE_BOARDS_DB_NAME,
  VITE_USER_BOARDS_DB_NAME,
  VITE_BOARDS_TEMPLATE_DB_NAME
} = import.meta.env;

export enum PATHS {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  FORGOT_PASSWORD = '/forgot-password',
  PROFILE = '/profile',
  BOARD = '/board'
}

export const AUTH_TABS: DefaultTabInfo[] = [
  {
    key: '1',
    label: 'Log in',
    link: PATHS.LOGIN,
  },
  {
    key: '2',
    label: 'Register',
    link: PATHS.REGISTER,
  },
];

export const USER_PROPERTIES = ['username', 'email', 'city', 'occupation'];

export const AVATARS_DB_NAME = VITE_AVATARS_DB_NAME;
export const USERS_DB_NAME = VITE_USERS_DB_NAME;
export const UPLOAD_PRESET = VITE_UPLOAD_PRESET;
export const UPLOAD_URL = VITE_UPLOAD_URL;
export const AVATARS_PATH = VITE_AVATARS_PATH;
export const BOARDS_DB_NAME = VITE_BOARDS_DB_NAME;
export const USER_BOARDS_DB_NAME = VITE_USER_BOARDS_DB_NAME;
export const BOARDS_TEMPLATE_DB_NAME = VITE_BOARDS_TEMPLATE_DB_NAME;

export const BREADCRUMBS_MAP = {
  [PATHS.HOME]: 'Home',
  [PATHS.PROFILE]: 'Profile',
  [PATHS.LOGIN]: 'Login',
  [PATHS.REGISTER]: 'Register',
  [PATHS.FORGOT_PASSWORD]: 'Forgot Password',
};

export const ITEMS_PER_PAGE = 10;

export const MIN_PASSWORD_LENGTH = 8