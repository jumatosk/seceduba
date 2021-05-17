import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Classes from '../screens/Classes'

const Stack = createStackNavigator()

export default () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Classes" component={Classes}/>
        </Stack.Navigator>
    </NavigationContainer>
)