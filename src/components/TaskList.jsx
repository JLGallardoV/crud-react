import TaskCard from "./TaskCard";
import { useContext } from "react";
import { taskContext } from "../context/TaskContext";

function TaskList(){

    const {tasks} = useContext(taskContext)


    if(tasks.length === 0)
        return <h1 className="text-white text-4x1 font-bold text-center">No hay tareas asignadas</h1>

    return(
        <div className="grid grid-cols-4 gap-2">
            {   

                tasks.map((task)=>(
                    <TaskCard key={task.id} task={task}/>     
                ))
            }

        </div>
    );
}

export default TaskList;