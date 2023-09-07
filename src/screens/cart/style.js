import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        //backgroundColor: 'grey'
    },
    chevron: {
        width: 40,
        height: 40,
        borderWidth: 0.5,
        borderColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    text: {
        color: '#000',
        marginLeft: 70,
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    dots:  {
        width: 40,
        height: 40,
        marginLeft: 70,
        borderWidth: 0.5,
        borderColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignSelf: 'flex-end',
    },
    cartList: {
        backgroundColor: '#fff',
        padding: 15,
        borderWidth: 0.5,
        borderRadius: 13,
        borderColor: '#fff',
        marginHorizontal: 20,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cartListText: {
        fontWeight: '500',
        fontSize: 15, 
        color: '#000',
    },
    viewi:  {
        backgroundColor: '#f0f0f0'
    },
    line: {
        height: 1,             // Adjust the height as needed
        backgroundColor: '#f0f0f0',
        marginLeft: 20,
        marginRight: 20,
    },
    subTotalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
    },
    text1: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text2: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonView: {
       // backgroundColor: 'grey'
    },
    checkoutButton: {
        backgroundColor: '#568746',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default styles;