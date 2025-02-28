import { Task } from "@pages/board/components"

import { TaskListProps } from "./types"

export const TasksList = ({ tasks }: TaskListProps) => {
    return <>
        {tasks?.map(({ title, taskID, description }) => (
            <Task title={title} taskID={taskID} description={description} key={taskID} />
        ))}
    </>
}