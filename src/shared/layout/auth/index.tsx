import { Outlet } from "react-router";

import { Card, Content, Flex, Layout } from "./styled";

export const AuthLayout = () => {
  return (
    <Flex gap="middle" wrap justify="center" align="center">
      <Layout>
        <Content>
          <Card>
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Flex>
  );
};
