import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ManageScreen from './screens/ManageScreen';
import TabNav from './Navigation/TabNav';
import { colors } from './constants/Colors';



export default function App() {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:colors.primary,
        },
        headerTintColor:colors.secondary,
        cardStyle:{
          backgroundColor:colors.primary100
        }
      }}>
        <Stack.Screen name='Expenses' component={TabNav} options={{
          headerShown:false
        }} />
        <Stack.Screen name='ManageExp' component={ManageScreen} options={{
          presentation:'modal'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


