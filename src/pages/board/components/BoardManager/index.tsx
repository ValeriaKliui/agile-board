import { Board, BoardHeader, MembersListManager } from "@pages/board/components"
import { boardStore } from "@store"
import { Flex, Spin, Typography } from "antd"
import { observer } from "mobx-react-lite"
import { useCallback, useEffect } from "react"

import { BoardManagerProps } from "./types"

const { Text } = Typography

export const BoardManager = observer(({ id }: BoardManagerProps) => {
    const { title, createdAt, members } = boardStore.currentBoardInfo ?? {}

    const fetchCurrentBoard = useCallback(async () => {
        if (id) await boardStore.fetchCurrentBoard({ id })
    }, [id])


    useEffect(() => {
        fetchCurrentBoard()
    }, [fetchCurrentBoard])

    if (boardStore.isLoading)
        return <Spin />

    return <Flex vertical gap='middle'>
        <Flex justify="space-between">
            <Flex gap='large' align="center">
                {title && <BoardHeader title={title} />}
                <MembersListManager members={members} />
            </Flex>
            <Text>Created at: {createdAt}</Text>
        </Flex>

        <Board />
    </Flex>
})