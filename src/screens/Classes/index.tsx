import React, { Fragment, useState } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-paper'
import { ScreenProps } from '../../models/Props'
import { AllDataClass } from '../../models/Classes'
import MyHeader from '../../components/MyHeader'
import ClassItem from '../../components/ClassItem'
import WeekDay from '../../components/WeekDay'
import calendar from '../../assets/calendar.png'
import { formatDate } from '../../util/formatDate'
import { formatWeekDay } from '../../util/formatWeekDay'
import { formatShit } from '../../util/formatShift'
import _ from 'lodash'
import styles from './styles'

import db from '../../util/db.json'

export default ({ navigation: { goBack } }: ScreenProps) => {
    const [infoClass] = useState<AllDataClass>(db);

    return (
        <Fragment>
            <MyHeader title="Aulas" goBack={() => goBack()} />
            <View style={styles.schoolNameView}>
                <Text numberOfLines={1} style={styles.schoolName}>COL EST DO CAMPO CARLOS HUMBERTO DE MIRANDA PEREIRA MELLO</Text>
            </View>
            <View style={styles.contentView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.topContent}>
                        <Text style={styles.date}>{formatDate(infoClass.data)}</Text>
                        <View style={styles.calendarView}>
                            <Image style={styles.calendarImg} source={calendar} />
                        </View>
                    </View>
                    {infoClass._embedded.aulas.map(classInfo => (
                        <Fragment key={classInfo.id}>
                            <WeekDay weekDay={formatWeekDay(classInfo.diaSemana)} date={classInfo.dataSemana} shift={formatShit(classInfo.turno)} />
                            <View style={styles.classTime}>
                                <ClassItem school={classInfo.siglaEscola} classTime={`${classInfo.diaSemana}${classInfo.turno}${classInfo.horario}`} />
                            </View>
                            <Divider style={styles.divider} />
                        </Fragment>
                    ))}
                </ScrollView>
            </View>
        </Fragment>
    )
}