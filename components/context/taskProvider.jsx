import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskContext = createContext();
const STORAGE_TASK_KEY = 'fokus-tasks';

export function TasksProvider({children}){

    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const storeData = async (tasks) => {
        try {
            const parsedData = JSON.stringify(tasks);
            await AsyncStorage.setItem(STORAGE_TASK_KEY, parsedData);
        } 
        catch(err){
            throw err;
        }
    }
    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem(STORAGE_TASK_KEY);
            const loadedData = data !== null ? JSON.parse(data) : [];
            setTasks(loadedData);
            setIsLoaded(true);
        } 
        catch(err){
            throw err;
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if(isLoaded){
            storeData(tasks);
        }
    }, [tasks]);

    const addTask = (description) => {
        console.log('Tarefa sendo adicionada!');
        setTasks(oldState => {
            return [
                ...oldState,
                {
                    description,
                    id: oldState + 1
                }
            ]
        })
    };

    const toggleTaskCompleted = (id) =>{

        setTasks(oldState => {
            return oldState.map((task) => {
                
                if(task.id === id)
                    task.completed = !task.completed
                return task;
            })
        })
    }

    const deleteTask = (id) => {

        setTasks(oldState => {
            return oldState.filter((task) => task.id !== id)
        })
    }

    return(
        <TaskContext.Provider value={{
            tasks,
            addTask,
            toggleTaskCompleted,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}