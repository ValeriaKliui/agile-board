import { UserBoardsCreator } from "@pages/home/components"
import Title from "antd/es/typography/Title"

import { FlexStyled } from "./styled"

export const UserBoardsHeader = ({ fetchBoards }) => {
    return <header>
        <FlexStyled vertical justify='space-between' align="center">
            <Title level={2}>Available boards</Title>
            <UserBoardsCreator fetchUserBoards={fetchBoards} />
        </FlexStyled>
    </header>
}