import { Header } from "@components/Header";
import { PATHS } from "@constants/index";
import authStore from "@store/auth/authStore";
import userStore from "@store/user/userStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

export const HeaderContainer = observer(() => {
  const isUserExists = userStore.isLoggedIn;
  const navigate = useNavigate();

  const onLogin = () => navigate(PATHS.LOGIN);
  const onLogout = async () => await authStore.logout();

  return (
    <Header isUserExists={isUserExists} onLogin={onLogin} onLogout={onLogout} />
  );
});
