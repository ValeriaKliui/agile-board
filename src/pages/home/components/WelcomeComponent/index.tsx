import { SmileOutlined } from '@ant-design/icons';
import { PATHS } from '@constants';
import { Centered } from '@shared/components';
import { Button, Result, Typography } from 'antd';
import { NavLink } from 'react-router';

import { Container } from './styled';

const { Title } = Typography;

export const WelcomeComponent = () => {
  return (
    <Centered>
      <Container vertical align="center">
        <Title level={2}>Welcome to Agile Board site!</Title>

        <Result
          icon={<SmileOutlined />}
          title="If you're interested in creating Boards"
          extra={
            <NavLink to={PATHS.LOGIN}>
              <Button type="primary">Log in!</Button>
            </NavLink>
          }
        />
      </Container>
    </Centered>
  );
};
