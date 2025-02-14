import { PATHS } from "@constants/index";
import userStore from "@store/userStore";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useProtectedRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStore.isLoggedIn) navigate(PATHS.LOGIN);
  }, [navigate]);
};
