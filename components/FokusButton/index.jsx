import { StyleSheet, Pressable, Text } from "react-native";

export const FokusButton = ({ title, icon, onPress }) => {

    return (
        <Pressable style={styles.button} onPress={onPress}>
            {icon}
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#73aaecff',
        padding: 8,
        borderRadius: 32,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#0a2b53ff'
    },
});