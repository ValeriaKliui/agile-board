import { Button } from "@components/Button";
import { PATHS } from "@constants/index";
import { Avatar, Flex } from "antd";
import { Link } from "react-router";
import { Header as HeaderStyled } from "./styled";
import { HeaderProps } from "@components/Header/interfaces";

export const Header = ({ isUserExists, onLogout, onLogin }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Flex justify="space-between">
        <p>ЧТО_ТО СЮДА</p>
        <Flex align="center" gap="middle">
          {isUserExists && (
            <Link to={PATHS.PROFILE}>
              <Avatar style={{ background: "pink" }}>isLoggedI</Avatar>
            </Link>
          )}
          {isUserExists ? (
            <Button cursor="pointer" onClick={onLogout}>
              Log out
            </Button>
          ) : (
            <Button cursor="pointer" onClick={onLogin}>
              Log in
            </Button>
          )}
        </Flex>
      </Flex>
    </HeaderStyled>
  );
};
