import { ForgotPasswordHeader } from "@components/ForgotPasswordHeader";
import { FormForgotPassword } from "@components/Forms/FormForgotPassword";
import { PATHS } from "@constants/index";

const { Text } = Typography;

import { Flex, Typography } from "antd";

const { Link } = Typography;
export const ForgotPasswordPage = () => {
  return (
    <Flex vertical gap={"small"}>
      <ForgotPasswordHeader />
      <FormForgotPassword />
      <Text type="secondary">
        Back to <Link href={PATHS.LOGIN}> Login Page</Link>
      </Text>
    </Flex>
  );
};
