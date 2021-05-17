import { StyleSheet } from 'react-native'
import { COLORS } from '../../style/colors'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: COLORS.white
    },
    header: {
        backgroundColor: COLORS.blueDark
    },
})

export default styles