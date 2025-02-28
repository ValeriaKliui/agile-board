import { PERMISSIONS } from "@constants";
import { useDroppable } from "@dnd-kit/core";
import { Task, TaskCreator } from "@pages/board/components";
import { hasPermission } from "@pages/board/utils";
import { tasksStore } from "@store";
import { Column as ColumnType, } from "@store";
import { Flex } from "antd";
import { observer } from "mobx-react-lite";

import { CardStyled } from "./styled";

export const Column = observer(({ columnID, title, order }: ColumnType) => {
    const tasks = tasksStore.tasks?.[columnID]
    const isFirstColumn = order === 1

    const { setNodeRef } = useDroppable({ id: columnID })

    return <CardStyled ref={setNodeRef}
        size="small"
        title={title}
    >
        <Flex vertical gap='middle'>
            {tasks?.map(({ title, taskID, }) => <Task title={title} taskID={taskID} />)}
            {isFirstColumn && hasPermission({ permission: PERMISSIONS.tasks.create }) && (
                <TaskCreator columnID={columnID} />
            )}
        </Flex>
    </CardStyled>
})