import { BoardHeader, Board } from "@pages/board/components"
import { boardsStore } from "@store/boards"
import { observer } from "mobx-react-lite"
import { useCallback, useEffect } from "react"

import { BoardManagerProps } from "./types"
import { Flex, Spin, Typography } from "antd"
import { formatDatetime } from "@pages/home/services"
import { MembersList } from "@pages/board/components/MembersList"

const { Text } = Typography

export const BoardManager = observer(({ id }: BoardManagerProps) => {
    const { title, createdAt, members } = boardsStore.currentBoardInfo ?? {}
    const creationDate = formatDatetime({ timestamp: createdAt })

    const fetchCurrentBoard = useCallback(async () => {
        if (id) await boardsStore.fetchCurrentBoard({ id })
    }, [id])


    useEffect(() => {
        fetchCurrentBoard()
    }, [fetchCurrentBoard])

    if (boardsStore.isLoading)
        return <Spin />

    return <Flex vertical gap='middle'>
        <Flex justify="space-between">
            <Flex>
                {title && <BoardHeader title={title} />}
                <MembersList members={members} />
            </Flex>
            {creationDate && <Text>Created at: {creationDate}</Text>}
        </Flex>

        <Board />
    </Flex>
})