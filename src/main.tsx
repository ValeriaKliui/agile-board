import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./config/globalStyles";
import "./config/firebase";
import "@ant-design/v5-patch-for-react-19";
import { AppRoutes } from "./config/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </StrictMode>
);
