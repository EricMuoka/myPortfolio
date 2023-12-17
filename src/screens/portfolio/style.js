import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    imageContainer: {
       flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    text: {
        alignItems: 'center',
        paddingTop: 35,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    imageContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
        alignSelf: 'center',
        marginBottom: 15,
    },
    smallText:{
        fontSize: 18,
        color: '#fff',
        paddingTop: 20,
    },
    nameText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff',
    },
    detailsText: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'center',
        paddingBottom: 15,
    },
    containerii: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    iconText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    },
});

export default styles;