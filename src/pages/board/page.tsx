import { BoardManager } from "@pages/board"
import { useParams } from "react-router"

export const BoardPage = () => {
    const params = useParams()
    const boardID = params.boardID

    return <BoardManager boardID={boardID} />
}