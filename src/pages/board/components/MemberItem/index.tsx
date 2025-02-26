import { Tooltip } from "@pages/board/components"
import { MemberItemProps } from "./types"
import { Avatar } from "@shared/components"

export const MemberItem = ({ username, color }: MemberItemProps) => {
    return <Tooltip title={username} placement="top">
        <Avatar color={color} size={40} />
    </Tooltip>
}