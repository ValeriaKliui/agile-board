import { logoutUser } from "@utils/auth/logoutUser";
import { NavLink } from "react-router";

export const Home = () => {
  const onClick = async () => {
    await logoutUser();
  };

  return (
    <>
      <NavLink to="/register" end>
        register
      </NavLink>
      <button onClick={onClick}>logout</button>
    </>
  );
};
