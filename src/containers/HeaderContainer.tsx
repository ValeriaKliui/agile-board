import { Header } from "@components/Header";
import { PATHS } from "@constants/index";
import authStore from "@store/auth/authStore";
import userStore from "@store/user/userStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

export const HeaderContainer = observer(() => {
  const navigate = useNavigate();

  const onLogin = () => navigate(PATHS.LOGIN);
  const onLogout = () => authStore.logout();

  return (
    <Header
      isUserExists={userStore.isLoggedIn}
      onLogin={onLogin}
      onLogout={onLogout}
    />
  );
});
