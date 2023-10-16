import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserFood from '../screens/UserFood'

const Stack = createStackNavigator()

export default function UserFoodStack()
{
    return
    (
        <Stack.Navigator>
            <Stack.Screen
                name="userfood"
                component={UserFood}
                options={{ title: "Plan de Alimentación"}}
            />
        </Stack.Navigator>
    )
}