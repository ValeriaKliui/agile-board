import { PATHS } from '@constants/common';
import { ForgotPasswordFormContainer } from '@containers/ForgotPasswordFormContainer';
import { Flex, Typography } from 'antd';
import { ForgotPasswordHeader } from './components/ForgotPasswordHeader';

const { Text, Link } = Typography;

export const ForgotPasswordPage = () => {
  return (
    <Flex vertical gap={'small'}>
      <ForgotPasswordHeader />
      <ForgotPasswordFormContainer />
      <Text type="secondary">
        Back to <Link href={PATHS.LOGIN}> Login Page</Link>
      </Text>
    </Flex>
  );
};
