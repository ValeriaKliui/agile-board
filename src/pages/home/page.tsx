import { UserBoards, WelcomeComponent } from '@pages/home';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
  const isLoggedIn = userStore.isLoggedIn

  if (!isLoggedIn) {
    return <WelcomeComponent />;
  }

  return (
    <>
      <UserBoards />
    </>
  );
});