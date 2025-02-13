import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useRedirectAuthorizedUsers = (isProtectedRoute = false) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const isAuthenticated = Boolean(user);
      const isAccessingProtectedRoute = isProtectedRoute;

      if (isAuthenticated && !isAccessingProtectedRoute) {
        navigate(PATHS.HOME);
      } else if (!isAuthenticated && isAccessingProtectedRoute) {
        navigate(PATHS.LOGIN);
      }
    });

    return () => unsubscribe();
  }, [navigate, isProtectedRoute]);
};
