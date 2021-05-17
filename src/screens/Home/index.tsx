import React, { Fragment } from 'react'
import { View } from 'react-native'
import MyHeader from '../../components/MyHeader'
import Button from '../../components/Button/'
import { ScreenProps } from '../../models/Props'
import styles from './styles'

export default ({ navigation: { navigate } }: ScreenProps) => {
    return (
        <Fragment>
            <MyHeader title="Início" />
            <View style={styles.container}>
                <Button onPress={() => navigate('Classes')} title="Acessar Horários" />
            </View>
        </Fragment>
    );
}