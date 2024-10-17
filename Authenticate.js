import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Authentication/Login';
import Signup from './screens/Authentication/Signup';
import Welcome from './screens/Authentication/Welcome';
import { colors } from './constants/Colors';

const Authenticate = () => {
    const Stack = createStackNavigator();
  return ( 

    <Stack.Navigator  screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:colors.primary100
        }
    }}>

        <Stack.Screen name='welcome' component={Welcome} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={Signup} />
    </Stack.Navigator>
    
  )
}

export default Authenticate