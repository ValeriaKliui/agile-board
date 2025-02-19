import { PATHS } from '@constants/common';
import { ProtectedRoute } from '@containers/ProtectedRoute';
import { AuthLayout } from '@layout/auth';
import { DefaultLayout } from '@layout/default';
import { ForgotPasswordPage } from '@pages/ForgotPasswordPage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ProfilePage } from '@pages/ProfilePage';
import { RegisterPage } from '@pages/RegisterPage';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="*" element={<>Path was not found</>} />
          <Route index element={<HomePage />} />
          <Route
            path={PATHS.PROFILE}
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
