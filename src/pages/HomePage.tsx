import { Button } from "@components/Button";
import { auth } from "@config/firebase";
import authStore from "@store/auth/authStore";
import { NavLink } from "react-router";

export const HomePage = () => {
  const onClick = async () => {
    await authStore.logout({ auth });
  };

  return (
    <>
      <div>
        <NavLink to="/register" end>
          register
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile" end>
          profile
        </NavLink>
      </div>
      <Button onClick={onClick}>logout</Button>
    </>
  );
};
