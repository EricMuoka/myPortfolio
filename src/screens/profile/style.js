import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    containerii: {
        flex: 1,
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
        paddingTop: 35,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    nameText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    phoneText: {
        color: 'grey',
        fontSize: 13,
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30
    },
    iconText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default styles;