import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import "@ant-design/v5-patch-for-react-19";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layout/auth/layout";
import GlobalStyle from "./globalStyles";
import "./config/firebase";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/*
        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route>*/}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
