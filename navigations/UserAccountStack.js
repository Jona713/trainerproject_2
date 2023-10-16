import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserAccount from '../screens/UserAccount'

const Stack = createStackNavigator()

export default function UserAccountStack()
{
    return
    (
        <Stack.Navigator>
            <Stack.Screen
                name="useraccount"
                component={UserAccount}
                options={{ title: "Cuenta"}}
            />
        </Stack.Navigator>
    )
}