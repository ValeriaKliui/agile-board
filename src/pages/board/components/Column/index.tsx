// import { useDroppable } from "@dnd-kit/core";
// import { Task } from "@pages/board/components/Task";
// import { Column as ColumnType, Task as TaskType, } from "@store";
// import { Flex } from "antd";
// import { observer } from "mobx-react-lite";
// import { useState } from "react";

// import { CardStyled } from "./styled";


// export const Column = observer(({ id, title, order }: ColumnType) => {
//     const [tasks, setTasks] = useState<TaskType[]>([])

//     const { setNodeRef } = useDroppable({ id })

//     // useEffect(() => {
//     //     const fetchTasks = async () => {
//     //         const tasks = await boardsStore.fetchTasksForColumn({ id })
//     //         if (tasks) setTasks(tasks)
//     //     }
//     //     fetchTasks()
//     // }, [id])

//     return <CardStyled ref={setNodeRef}
//         size="small"
//         title={title}
//     >
//         <Flex vertical gap='middle'>
//             {tasks.map(({ title, id }) => <Task title={title} id={id} key={id} />)}
//         </Flex>
//     </CardStyled>
// })