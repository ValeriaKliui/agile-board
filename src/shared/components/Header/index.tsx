import { PATHS } from '@constants';
import { Avatar, Breadcrumbs, Button } from '@shared/components';
import { Flex, } from 'antd';
import { memo } from 'react';
import { Link } from 'react-router';

import { Header as HeaderStyled, Wrapper } from './styled';
import { HeaderProps } from './types';

export const Header = memo(({ onLogout, onLogin, avatar, username }: HeaderProps) => {
  const defaultUsername = username ?? 'Guest';
  const isAuthenticated = Boolean(username);
  const buttonText = isAuthenticated ? 'Log out' : 'Log in';
  const buttonHandler = isAuthenticated ? onLogout : onLogin;

  return (
    <HeaderStyled>
      <Wrapper>
        <Breadcrumbs />
        <Flex gap="middle" align="center">
          <Link to={PATHS.PROFILE}>
            <Avatar size={40} src={avatar} >
              {!avatar && defaultUsername?.[0]}
            </Avatar>
          </Link>
          <Button cursor="pointer" onClick={buttonHandler}>
            {buttonText}
          </Button>
        </Flex></Wrapper>
    </HeaderStyled>
  );
});
