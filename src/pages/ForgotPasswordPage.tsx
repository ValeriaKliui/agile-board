import { ForgotPasswordHeader } from "@components/ForgotPasswordHeader";
import { PATHS } from "@constants/index";
import { FormForgotPasswordContainer } from "@containers/FormForgotPasswordContainer";

const { Text } = Typography;

import { Flex, Typography } from "antd";

const { Link } = Typography;
export const ForgotPasswordPage = () => {
  return (
    <Flex vertical gap={"small"}>
      <ForgotPasswordHeader />
      <FormForgotPasswordContainer />
      <Text type="secondary">
        Back to <Link href={PATHS.LOGIN}> Login Page</Link>
      </Text>
    </Flex>
  );
};
