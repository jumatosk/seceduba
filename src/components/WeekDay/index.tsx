import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { WeekDayProps } from '../../models/Components'

export default ({ weekDay, date, shift }: WeekDayProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.dayClass}>{weekDay}{' >'}</Text>
            <Text style={styles.dayClass}>{date}{' >'}</Text>
            <Text style={styles.dayClass}>{shift}</Text>
        </View>
    )
}