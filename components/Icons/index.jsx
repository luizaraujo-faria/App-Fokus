import { Image, StyleSheet } from "react-native";

export const IconPlay = () => {

    return (
        <Image style={styles.icons} source={require('../../assets/icons/icon-play.png')}/>    
    );
}

export const IconPause = () => {

    return (
        <Image style={styles.icons} source={require('../../assets/icons/icon-pause.png')}/>
    );
}

export const IconCheck = ({ checked }) => {

    const icon = checked
          ? require('../../assets/icons/Check_verde.png')
          : require('../../assets/icons/Check_branco.png')

    return (
        <Image style={styles.icons} source={icon}/>
    );
}

export const IconSave = (iconStyle) => {

    return (
        <Image style={[styles.icons, iconStyle && iconStyle]} source={require('../../assets/icons/save.png')}/>
    );
}

export const IconTrash = () => {

    return (
        <Image style={styles.icons} source={require('../../assets/icons/delete.png')}/>
    );
}

export const IconPencil = () => {

    return (
        <Image style={styles.icons} source={require('../../assets/icons/edit.png')}/>
    );
}

export const IconPlus = ({ cor }) => {

    const icon = cor
        ? require('../../assets/icons/Add_lilás.png')
        : require('../../assets/icons/Add_branco.png')

    return (
        <Image style={styles.icons} source={icon}/>
    );
}

const styles = StyleSheet.create({
    icons: {
        width: 24,
        height: 24,
    }
});