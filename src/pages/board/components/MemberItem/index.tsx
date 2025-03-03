import { Tooltip } from "@pages/board/components"
import { Avatar } from "@shared/components"

import { MemberItemType } from "./types"

export const MemberItem = ({ username, color, role }: MemberItemType) => {
    return <Tooltip title={`${username} - ${role}`} placement="top">
        <Avatar color={color} size={40}  >
            {username[0]}
        </Avatar>
    </Tooltip>
}