import { Image, StyleSheet } from "react-native";

export const IconPlay = () => {

    return (
        <Image style={styles.icons} source={require('../../assets/images/icon-play.png')}/>    
    );
}

export const IconPause = () => {

    return (
        <Image style={styles.icons} source={require('../../assets/images/icon-pause.png')}/>
    );
}

const styles = StyleSheet.create({
    icons: {
        width: 24,
        height: 24,
    }
});