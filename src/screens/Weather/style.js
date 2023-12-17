import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',
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
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    text: {
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'AvenirNext-Regular',
            },
            android: {
                fontFamily: 'Roboto'
            }
        }),
        color: '#fff',
    },
    smallText:{
        fontSize: 18,
        color: '#000',
        margin: 10,
    },
    largeText:{
        fontSize: 48,
        color: '#000',
    },
    inputContainer: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        borderRadius: 5,
        marginHorizontal: 30,
        paddingHorizontal: 10,
    },
    input: {
        color: '#fff',
        alignSelf: 'center',
    },
})

export default styles;