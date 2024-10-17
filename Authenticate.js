import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Authentication/Login";
import Signup from "./screens/Authentication/Signup";
import Welcome from "./screens/Authentication/Welcome";
import { colors } from "./constants/Colors";
import { useSelector } from "react-redux";
import Authenticated from "./Authenticated";

const Authenticate = () => {
  const Stack = createStackNavigator();
  const isAuth = useSelector((state) => state.authenticate.isAuthenticated);
  if (isAuth == false) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.primary100,
          },
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    );
  } else {
    return <Authenticated />;
  }
};

export default Authenticate;
