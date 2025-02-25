import { BoardHeader, Board } from "@pages/board/components"
import { boardsStore } from "@store/boards"
import { observer } from "mobx-react-lite"
import { useCallback, useEffect } from "react"

import { BoardManagerProps } from "./types"
import { Flex, Spin } from "antd"

export const BoardManager = observer(({ id }: BoardManagerProps) => {
    const { title, } = boardsStore.currentBoardInfo ?? {}

    const fetchCurrentBoard = useCallback(async () => {
        if (id) await boardsStore.fetchCurrentBoard({ id })
    }, [id])

    useEffect(() => {
        fetchCurrentBoard()
    }, [fetchCurrentBoard])

    if (boardsStore.isLoading)
        return <Spin />

    return <Flex vertical gap='middle'>
        {title && <BoardHeader title={title} />}
        <Board />
    </Flex>
})