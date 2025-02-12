import { AuthLayout } from "@layout/auth/layout";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Register } from "@pages/Register";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
