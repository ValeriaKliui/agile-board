import { PATHS } from '@constants';
import { Avatar, Breadcrumbs, Button } from '@shared/components';
import { Flex, theme } from 'antd';
import { memo } from 'react';
import { Link } from 'react-router';

import { Header as HeaderStyled } from './styled';
import { HeaderProps } from './types';

const { useToken } = theme;

export const Header = memo(({ onLogout, onLogin, avatar, username }: HeaderProps) => {
  const defaultUsername = username ?? 'Guest';
  const isAuthenticated = Boolean(username);
  const buttonText = isAuthenticated ? 'Log out' : 'Log in';
  const buttonHandler = isAuthenticated ? onLogout : onLogin;

  const { token } = useToken();

  return (
    <HeaderStyled>
      <Breadcrumbs />
      <Flex gap={'middle'} align="center">
        <Link to={PATHS.PROFILE}>
          <Avatar size={40} src={avatar} color={token.colorPrimary}>
            {!avatar && defaultUsername?.[0]}
          </Avatar>
        </Link>
        <Button cursor="pointer" onClick={buttonHandler}>
          {buttonText}
        </Button>
      </Flex>
    </HeaderStyled>
  );
});
