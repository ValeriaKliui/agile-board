import { auth } from "@config/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useRedirectAuthorizedUsers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);
};
