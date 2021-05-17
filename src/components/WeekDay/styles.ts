import {StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp('4%'),
        justifyContent: 'center'
    },
    dayClass: {
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: wp('1%'),
        marginVertical: hp('1%')
    }
})

export default styles