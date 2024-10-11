import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ManageScreen from './screens/ManageScreen';
import TabNav from './Navigation/TabNav';



export default function App() {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name='Expenses' component={TabNav} />
        <Stack.Screen name='ManageExp' component={ManageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


