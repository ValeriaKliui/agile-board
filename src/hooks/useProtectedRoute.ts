import user from "@store/user";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user.uid);
    // if (!user.isLoggedIn) {
    //   navigate(PATHS.LOGIN);
    // }
  }, [navigate]);
};
