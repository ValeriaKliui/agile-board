import { PATHS } from '@constants';
import {
  BoardPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
} from '@pages';
import { ProtectedRoute } from '@shared/components';
import { AuthLayout, DefaultLayout } from '@shared/layout';

const defaultLayoutRoutes = [
  { index: true, element: <HomePage /> },
  {
    path: '*',
    element: <>Page was not found</>,
  },
  {
    path: PATHS.PROFILE,
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${PATHS.BOARD}/:boardID`,
    element: (
      <ProtectedRoute>
        <BoardPage />
      </ProtectedRoute>
    ),
  },
];

const authLayoutRoutes = [
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATHS.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: PATHS.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
  },
];

export const ROUTES = [
  {
    layout: <DefaultLayout />,
    children: defaultLayoutRoutes,
  },
  {
    layout: <AuthLayout />,
    children: authLayoutRoutes,
  },
];
