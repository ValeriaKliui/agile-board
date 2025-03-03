import { PATHS } from "@constants";
import { BoardPage, ForgotPasswordPage, HomePage, LoginPage, ProfilePage, RegisterPage } from "@pages";
import { ProtectedRoute } from "@shared/components";
import { AuthLayout, DefaultLayout } from "@shared/layout";

import { AppRoute, LayoutRoute } from "./types";

const defaultLayoutRoutes: AppRoute[] = [
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

const authLayoutRoutes: AppRoute[] = [
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


export const ROUTES: LayoutRoute[] = [
  {
    layout: <DefaultLayout />,
    children: defaultLayoutRoutes,
  },
  {
    layout: <AuthLayout />,
    children: authLayoutRoutes,
  },
];
