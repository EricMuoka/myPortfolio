import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    inputMethodEditor: {
        flex: 1,
    },
    toolBar: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.04)'
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