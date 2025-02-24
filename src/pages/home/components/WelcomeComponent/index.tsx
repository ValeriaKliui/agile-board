import { SmileOutlined } from "@ant-design/icons"
import { PATHS } from "@constants"
import { Button, Flex, Result, Typography } from "antd"
import { NavLink } from "react-router"

const { Title } = Typography

export const WelcomeComponent = () => {
    return <Flex vertical align="center">
        <Title level={2}>Welcome to Agile Board site!</Title>

        <Result
            icon={<SmileOutlined />}
            title="If you're interested in creating Boards"
            extra={<NavLink to={PATHS.LOGIN}>
                <Button type="primary">Log in!</Button>
            </NavLink>}
        />
    </Flex>
}