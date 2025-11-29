import { StyleSheet, Pressable, Text } from "react-native";

export const FokusButton = () => {

    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#73aaecff',
        padding: 8,
        borderRadius: 32,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#0a2b53ff'
    },
});