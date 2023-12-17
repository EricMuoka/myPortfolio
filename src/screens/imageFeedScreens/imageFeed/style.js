import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
    },
    text: {
        color: '#000',
        fontSize: 28,
    },
    comments: {
        flex: 1,
    },
    smallText:{
        fontSize: 18,
        color: '#000',
        margin: 10,
        textAlign: 'center',
        justifyContent: 'center'
    },
})

export default styles;