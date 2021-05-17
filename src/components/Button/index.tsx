import React from 'react'
import { Button } from 'react-native-paper'
import { ButtonProps } from '../../models/Components'
import styles from './styles'

export default ({ onPress, title }: ButtonProps) => {
    return (
        <Button onPress={onPress} style={styles.button} color="white">
            {title}
        </Button>
    )
}