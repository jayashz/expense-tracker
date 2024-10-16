import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ManageScreen from "./screens/ManageScreen";
import TabNav from "./Navigation/TabNav";
import { colors } from "./constants/Colors";


export default function Authenticated() {
  const Stack = createStackNavigator();
  return (

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.secondary,
          cardStyle: {
            backgroundColor: colors.primary100,
          },
        }}
      >
        <Stack.Screen
          name="Expenses"
          component={TabNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ManageExp"
          component={ManageScreen}
          options={{
            presentation: "modal",

          }}
        />
        
      </Stack.Navigator>

  );
}
