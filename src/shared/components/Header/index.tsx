import { PATHS } from '@constants';
import { Avatar, Breadcrumbs, Button } from '@shared/components';
import { Flex } from 'antd';
import { Link } from 'react-router';

import { Header as HeaderStyled } from './styled';
import { HeaderProps } from './types';

export const Header = ({ onLogout, onLogin, avatar, username }: HeaderProps) => {
  const defaultUsername = username ?? 'Guest';

  return (
    <HeaderStyled>
      <Breadcrumbs />
      <Flex gap={'middle'} align="center">
        <Link to={PATHS.PROFILE}>
          <Avatar size={40} src={avatar ?? null}>
            {!avatar && defaultUsername?.[0]}
          </Avatar>
        </Link>
        {username ? (
          <Button cursor="pointer" onClick={onLogout}>
            Log out
          </Button>
        ) : (
          <Button cursor="pointer" onClick={onLogin}>
            Log in
          </Button>
        )}
      </Flex>
    </HeaderStyled>
  );
};
