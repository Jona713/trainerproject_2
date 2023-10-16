import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Mainscreen from '../screens/Mainscreen'

const Tab = createBottomTabNavigator()

export default function Navigation()
{
    return
    (
       <NavigationContainer>
            <Tab.Navigator>
               <Tab.Screen
                 name="mainscreen"
                 component={ Mainscreen }
               />
            </Tab.Navigator>
       </NavigationContainer>
    )
}