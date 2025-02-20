import { PATHS } from '@constants';
import { ForgotPasswordPage, HomePage, LoginPage, ProfilePage, RegisterPage } from '@pages';
import { ProtectedRoute } from '@shared/components';
import { AuthLayout, DefaultLayout } from '@shared/layout';
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
