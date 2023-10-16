import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserTrain from '../screens/UserTrain'

const Stack = createStackNavigator()

export default function UserTrainStack()
{
    return
    (
        <Stack.Navigator>
            <Stack.Screen
                name="usertrain"
                component={UserTrain}
                options={{ title: "Plan de Entrenamiento"}}
            />
        </Stack.Navigator>
    )
}