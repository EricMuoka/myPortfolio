import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#fff',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
        color: '#000',

    },
    textInputTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;