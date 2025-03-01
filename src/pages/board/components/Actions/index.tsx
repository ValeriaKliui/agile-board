import { PATHS } from "@constants";
import { hasPermission } from "@pages/board/utils";
import { Button } from "@shared/components"
import { PERMISSIONS } from "@shared/constants";
import { boardStore, userStore } from "@store";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { useNavigate } from "react-router";

export const BoardActions = observer(() => {
    const navigate = useNavigate();

    const onDelete = useCallback(async () => {
        const boardID = boardStore.currentBoardInfo?.boardID
        const userID = userStore.user?.userID;

        if (boardID && userID) {
            await boardStore.deleteBoard({ boardID, userID });
            navigate(PATHS.HOME);
        }
    }, [navigate]);

    return <>
        {hasPermission(PERMISSIONS.boards.delete) && <Button type="dashed" onClick={onDelete}>
            Delete board
        </Button>}
    </>
})