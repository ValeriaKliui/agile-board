import { NavLink } from "react-router";

export default function Home() {
  return (
    <>
      HEllo!
      <NavLink to="/register" end>
        register
      </NavLink>
    </>
  );
}
