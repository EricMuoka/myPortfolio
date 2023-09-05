import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    text: {
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageContainer: {
        paddingLeft: 30,
        paddingTop: 30,
        flexDirection: 'row'
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 75,
        marginBottom: 10,
    },
    button: {
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadButtonText: {
        paddingTop: 60,
        paddingLeft: 20,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    inputContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
    },
    inputCont: {
        flex: 2,
        marginRight: 70,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    label: {
        flex: 1,
        color: 'grey',
        marginTop: 30
    },
    input: {
        height: 50,
    },
    buttonContainer: {
        padding: 30,
        flex: 1,
    },
    saveButton: {
        backgroundColor: 'blue',
        paddingVertical: 0,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
});

export default styles;