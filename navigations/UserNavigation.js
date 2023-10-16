import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import UserHomeStack from './UserHomeStack'
import UserTrainStack from './UserTrainStack'
import UserFoodStack from './UserFoodStack'
import UserAccountStack from './UserAccountStack'
import UserHome from '../screens/UserHome'

const Tab = createBottomTabNavigator()

export default function UserNavigation()
{
const screenOptions = (route, color) => 
{
  let iconName
  switch (route.name) 
  {
    case "userhome":
      iconName = "home"
      break;
    case "usertrain":
        iconName = "weight-lifter"
        break;
    case "userfood":
        iconName = "food-variant"
        break;
    case "useraccount":
        iconName = "account"
        break; 
  }
  return
  (
    <Icon
      type="material-community"
      name={iconName}
      size={22}
      color={color}
    />
  )
}
    return
    (
       <NavigationContainer>
            <Tab.Navigator
              initialRouteName="userhome"
              tabBarOptions=
              {{
                activeTintColor:"#FF0000",
                inactiveTintColor: "#9C9C9C"
              }}
              screenOptions={({ route }) => 
              ({ 
                tabBarIcon: ({ color }) => screenOptions(route, color)
              })}
            >
               <Tab.Screen
                 name="userhome"
                 component={ UserHomeStack }
                 options={{ title: "Home"}}
               />
               <Tab.Screen
                 name="usertrain"
                 component={ UserTrainStack }
                 options={{ title: "Plan Entrenamiento"}}
               />
               <Tab.Screen
                 name="userfood"
                 component={ UserFoodStack }
                 options={{ title: "Plan Alimentación"}}
               />
               <Tab.Screen
                 name="useraccount"
                 component={ UserAccountStack }
                 options={{ title: "Cuenta"}}
               />
            </Tab.Navigator>
       </NavigationContainer>
    )
}