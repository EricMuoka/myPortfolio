import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    title: {
        fontWeight: 500,
        color: '#000',
    },
    leftText: {
        color: '#000',
        position: 'absolute',
        left: 20,
        justifyContent: 'center',
        alignSelf: 'flex-end',
    }
})

export default styles;