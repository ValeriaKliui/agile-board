import { ProfileInfo } from '@pages/profile/components';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';

export const ProfileInfoManager = observer(() => {
  const { username = '', avatar, email = '' } = userStore.user ?? {};

  return <ProfileInfo username={username} avatar={avatar} email={email} />;
});
