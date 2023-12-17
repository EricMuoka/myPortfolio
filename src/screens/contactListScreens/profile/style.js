import { StyleSheet } from "react-native";
import colors from '../../../utils';

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    avatarSection:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default styles;