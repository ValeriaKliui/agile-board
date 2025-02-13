import { Button } from "@components/Button";
import { auth } from "@config/firebase";
import { logOutUser } from "@utils/auth/auth";
import { NavLink } from "react-router";

export const HomePage = () => {
  const onClick = async () => {
    await logOutUser({ auth });
  };

  return (
    <>
      <NavLink to="/register" end>
        register
      </NavLink>
      <Button onClick={onClick}>logout</Button>
    </>
  );
};
