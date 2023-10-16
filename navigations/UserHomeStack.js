import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserHome from '../screens/UserHome'

const Stack = createStackNavigator()

export default function UserHomeStack()
{
    return
    (
        <Stack.Navigator>
            <Stack.Screen
                name="userhome"
                component={UserHome}
                options={{ title: "Home"}}
            />
        </Stack.Navigator>
    )
}