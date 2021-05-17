import React from 'react'
import {Image} from 'react-native'
import { Appbar } from 'react-native-paper'
import { MyHeaderProps } from '../../models/Components'
import icon from '../../assets/logo.png'
import styles from './styles'

export default ({ goBack, title }: MyHeaderProps) => {
    return (
        <Appbar.Header style={styles.header}>
            {goBack ? <Appbar.Action icon="chevron-left"  onPress={goBack} /> : <Appbar.Action icon=''/>}
            <Appbar.Content titleStyle={styles.title} title={title} />
            <Appbar.Action icon={() => <Image source={icon}/>} />
        </Appbar.Header>
    )
}