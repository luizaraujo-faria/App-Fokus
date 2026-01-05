import { useContext } from "react";
import { TaskContext } from "./taskProvider";

export function useTaskContext(){

    const context = useContext(TaskContext);
    if(!context)
        throw new Error('Tentando acessar contexto fora de TasksProvider');

    return context;
}