import { ProfileInfo } from '@components/ProfileInfo';
import { userStore } from '@store/user/userStore';
import { observer } from 'mobx-react-lite';

export const ProfileInfoContainer = observer(() => {
  const username = userStore.user?.username;
  const avatar = userStore.user?.avatar;
  const email = userStore.user?.email;

  return <ProfileInfo username={username} avatarLink={avatar} email={email} />;
});
