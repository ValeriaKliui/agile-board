import { UserBoards, WelcomeComponent } from '@pages/home';
import { userStore } from '@store';
import { Flex, Spin } from 'antd';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
  const isLoggedIn = userStore.isLoggedIn;
  const isUserLoading = userStore.loadingUser;

  if (isUserLoading)
    return (
      <Flex justify="center" align="center" style={{ height: '100vh' }}>
        <Spin size="large" />
      </Flex>
    );

  if (!isLoggedIn) {
    return <WelcomeComponent />;
  }

  return (
    <>
      <UserBoards />
    </>
  );
});
