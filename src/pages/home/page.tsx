import { UserBoards, WelcomeComponent } from '@pages/home';
import { Spin } from '@shared/components';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
  const isLoggedIn = userStore.isLoggedIn;
  const isUserLoading = userStore.loadingUser;

  if (isUserLoading) return <Spin />;

  if (!isLoggedIn) {
    return <WelcomeComponent />;
  }

  return (
    <>
      <UserBoards />
    </>
  );
});
