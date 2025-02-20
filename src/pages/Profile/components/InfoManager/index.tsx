import { ProfileInfo } from '@pages/Profile/components';
import { userStore } from '@store/user';
import { observer } from 'mobx-react-lite';

export const ProfileInfoManager = observer(() => {
  const username = userStore.user?.username ?? '';
  const avatar = userStore.user?.avatar;
  const email = userStore.user?.email ?? '';

  return <ProfileInfo username={username} avatar={avatar} email={email} />;
});
