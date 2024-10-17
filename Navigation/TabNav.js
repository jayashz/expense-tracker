import React from "react";
import AllScreen from "../screens/AllScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentScreen from "../screens/RecentScreen";
import { colors } from "../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import IconBtn from "../component/ui/IconBtn";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Logout from "../screens/Logout";
const TabNav = () => {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();
  function addHandler() {
    navigation.navigate("ManageExp");
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarActiveTintColor: colors.secondary,
        headerTintColor: colors.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        headerRight: ({ tintColor }) => (
          <IconBtn
            icon="pluscircleo"
            size={20}
            color={tintColor}
            onPress={addHandler}
          />
        ),
      }}
    >
      <Tab.Screen
        name="RecentsExp"
        component={RecentScreen}
        options={{
          title: "Recents Expenses",
          tabBarLabel: "Recents",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="hourglass-1" size={19} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExp"
        component={AllScreen}
        options={{
          title: "All",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={19} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Logout}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="settings" size={23} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default TabNav;
