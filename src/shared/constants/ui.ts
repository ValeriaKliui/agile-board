import { PATHS } from '@constants';

export const AUTH_TABS = [
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

export const BREADCRUMBS_MAP = {
  [PATHS.HOME]: 'Home',
  [PATHS.PROFILE]: 'Profile',
  [PATHS.LOGIN]: 'Login',
  [PATHS.REGISTER]: 'Register',
  [PATHS.FORGOT_PASSWORD]: 'Forgot Password',
  [PATHS.BOARD]: 'Board',
};
export const MIN_PASSWORD_LENGTH = 8;
