import userStore from "@store/user/userStore";
import { Avatar } from "antd";
import { observer } from "mobx-react-lite";

export const AvatarContainer = observer(() => {
  const avatarLink = userStore.user?.avatar;
  const usernameFirstLetter = userStore?.user?.username[0];

  return (
    <Avatar src={avatarLink ?? null} style={{ background: "pink" }}>
      {avatarLink ? "" : usernameFirstLetter}
    </Avatar>
  );
});
