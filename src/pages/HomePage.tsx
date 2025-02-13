import { Button } from "@components/Button";
import { auth } from "@config/firebase";
import { logOutUser } from "@utils/auth/logOutUser";
import { NavLink } from "react-router";

export const HomePage = () => {
  const onClick = async () => {
    await logOutUser({ auth });
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
