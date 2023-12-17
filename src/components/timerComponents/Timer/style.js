import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: '#fff',
        borderColor: '#d6d7da',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    project: {
        color: '#000',
        fontSize: 14,
    },
    elaspedTime: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        paddingVertical: 15,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;