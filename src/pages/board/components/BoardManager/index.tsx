import { BoardHeader } from "@pages/board/components"
import { boardsStore } from "@store/boards"
import { observer } from "mobx-react-lite"
import { useCallback, useEffect } from "react"

import { BoardManagerProps } from "./types"

export const BoardManager = observer(({ boardID }: BoardManagerProps) => {
    const { title } = boardsStore.currentBoardInfo ?? {}

    const fetchCurrentBoard = useCallback(async () => {
        await boardsStore.fetchCurrentBoard({ boardID })
    }, [boardID])

    useEffect(() => {
        fetchCurrentBoard()
    }, [fetchCurrentBoard])

    return <>
        <BoardHeader title={title} />
    </>
})