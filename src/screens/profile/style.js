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
        color: '#568746',
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
        alignSelf: 'center',
    },
    nameText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#333333',
    },
    phoneText: {
        color: '#568746',
        fontSize: 13,
        alignSelf: 'center',
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30
    },
    iconText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#333333',
    },
});

export default styles;