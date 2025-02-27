import { useDroppable } from "@dnd-kit/core";
import { Task } from "@pages/board/components/Task";
import { tasksStore } from "@store";
import { Column as ColumnType, } from "@store";
import { Flex } from "antd";
import { observer } from "mobx-react-lite";

import { CardStyled } from "./styled";

export const Column = observer(({ columnID, title }: ColumnType) => {
    const tasks = tasksStore.tasks?.[columnID]

    const { setNodeRef } = useDroppable({ id: columnID })

    return <CardStyled ref={setNodeRef}
        size="small"
        title={title}
    >
        <Flex vertical gap='middle'>
            {tasks?.map(({ title, taskID, }) => <Task title={title} taskID={taskID} />)}
        </Flex>
    </CardStyled>
})