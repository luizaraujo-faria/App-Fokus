import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";

const TaskItem = ({ 
    completed, 
    text,
    onToggleComplete,
    onPressEdit,
    onPressDelete
}) => {

    const cardStyles = [styles.card];

    if(completed) cardStyles.push(styles.cardCompleted);

    return(
        <View style={cardStyles}>
            <Pressable onPress={onToggleComplete}>
                <IconCheck checked={completed} />
            </Pressable>

            <Text style={styles.text}>{text}</Text>
            
            <Pressable onPress={onPressEdit}>
                <IconPencil />
            </Pressable>
            <Pressable onPress={onPressDelete}>
                <IconTrash />
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#d8d8d8ff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 20,
        borderRadius: 8,
        gap: 8
    },
    cardCompleted: {
        backgroundColor: '#0F725C'
    },
    text: {
        flex: 1,
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    }
});

export default TaskItem;