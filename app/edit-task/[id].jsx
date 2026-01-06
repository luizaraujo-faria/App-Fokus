import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { useTaskContext } from '../../components/context/useTaskContext';
import FormTask from "../../components/FormTask";
import { router } from "expo-router";

export default function EditTask(){

    const { id } = useLocalSearchParams();
    const { tasks, updateTask } = useTaskContext();
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return <View>
            <Text>
                Não foi encontrada uma tarefa com o id: {id}
            </Text>
        </View>
    }

    
    const submitTask = (description) => {
        updateTask(description);
        router.navigate('/tasks');
    };

    return(
        <FormTask defaultValue={task.description} onFormSubmit={submitTask} />
    )
}