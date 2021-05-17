import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { COLORS } from '../../style/colors'

const styles = StyleSheet.create({
    schoolNameView: {
        width: wp('100%'),
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.blueMedium
    },
    schoolName: {
        fontSize: 16,
        marginHorizontal: wp('1.3%'),
        color: COLORS.white,
        fontWeight: 'bold'
    },
    contentView: {
        width: wp('95%'),
        height: hp('80%'),
        marginTop: wp('5%'),
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: COLORS.white,
    },
    topContent: {
        height: hp('7.5%'),
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.grayLigth
    },
    date: {
        width: wp('55%'),
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    calendarView: {
        width: wp('35%'),
        alignItems: 'flex-end'
    },
    classTime: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    calendarImg: {
        width: wp('7%'),
        height: hp('4%'),
        resizeMode: 'cover',
    },
    divider: {
        height: hp('.4%'),
        width: wp('80%'),
        marginVertical: hp('3%'),
        alignSelf: 'center',
        backgroundColor: COLORS.grayDark,
    }
})

export default styles