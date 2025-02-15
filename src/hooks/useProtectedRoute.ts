import { PATHS } from "@constants/index";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useProtectedRoute = (isLoggedIn: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate(PATHS.LOGIN);
  }, [navigate, isLoggedIn]);
};
