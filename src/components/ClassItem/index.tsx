import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { ClassItemProps } from '../../models/Components'

export default ({ school, classTime }: ClassItemProps) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={2} style={styles.class}>{school}</Text>
            <Text style={styles.class}>{classTime}</Text>
        </View>
    )
}