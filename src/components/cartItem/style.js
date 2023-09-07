import { StyleSheet } from 'react-native';
import { newColor} from './index';

const styles = StyleSheet.create({
    cart: {
        backgroundColor: '#fff',
        padding: 10,
    },
    cartList: {
        marginBottom: 20,
        borderWidth: 0.5,
        borderRadius: 13,
        borderColor: '#fff',
        marginHorizontal: 20,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemImage: {
        maxWidth: 100,
        maxHeight: 100,
        overflow: 'hidden',
        resizeMode: 'cover',
        alignSelf: 'flex-start',
        borderRadius: 10,
    },
    desc: {
        justifyContent: 'space-between',
        padding: 5,
        
    },
    cartListText: {
        fontWeight: '500',
        fontSize: 15, 
        color: '#000',
        alignSelf: 'flex-start',
        marginRight: 20,
    },
    itemColor: {
        color: 'grey',
        marginLeft: 5,
        marginTop: 1,
    },
    priceText: {
        color: '#000',
        marginLeft: 5,
    },
    viewi:  {
        justifyContent: 'space-between'
    },
    iconView:  {
        padding: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
    },
    close: {
        alignSelf: 'flex-end'
    },
    iconCont:  {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5,
    },
    line: {
        height: 1,             // Adjust the height as needed
        backgroundColor: '#f0f0f0',
        marginLeft: 20,
        marginRight: 20,

    },
});

export default styles;