import { BoardManager } from "@pages/board"
import { useParams } from "react-router"

export const BoardPage = () => {
    const params = useParams()

    return <BoardManager boardID={params.boardID} />
}