import { PATHS } from '@constants';
import { ForgotPasswordFormManager, ForgotPasswordHeader } from '@pages/forgotPassword';
import { Flex, Typography } from 'antd';

const { Text, Link } = Typography;

export const ForgotPasswordPage = () => {
  return (
    <Flex vertical gap={'small'}>
      <ForgotPasswordHeader />
      <ForgotPasswordFormManager />
      <Text type="secondary">
        Back to <Link href={PATHS.LOGIN}> Login Page</Link>
      </Text>
    </Flex>
  );
};
