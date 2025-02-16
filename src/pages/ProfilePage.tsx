import { Avatars } from "@components/Avatars";
import { FormUpdatePasswordContainer } from "@containers/FormUpdatePasswordContainer";
import { FormUpdateUserInfoContainer } from "@containers/FormUpdateUserInfoContainer";

export const ProfilePage = () => {
  return (
    <>
      <Avatars />
      <FormUpdateUserInfoContainer />
      <FormUpdatePasswordContainer />
    </>
  );
};
