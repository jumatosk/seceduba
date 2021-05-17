import { StyleSheet } from 'react-native'
import { COLORS } from '../../style/colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        width: wp('15%'),
        height: hp('8%'),
        marginHorizontal: wp('1%'),
        marginVertical: hp('2%'),
        padding: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.blueDark
    },
    class: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.white
    }
})

export default styles