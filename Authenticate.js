import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Authentication/Login";
import Signup from "./screens/Authentication/Signup";
import Welcome from "./screens/Authentication/Welcome";
import { colors } from "./constants/Colors";
import { useSelector } from "react-redux";
import Authenticated from "./Authenticated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/auth-slicee";
import LoadingOverlay from "./component/ui/LoadingOverlay";

const Authenticate = () => {
  const dispatch = useDispatch();
  const Stack = createStackNavigator();
  const isAuth = useSelector((state) => state.authenticate.isAuthenticated);
  const [retrieving, setRetrieving] = useState(true);

  useEffect(() => {
    async function retreiveToken() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(authenticate(token));
      }
      setRetrieving(false);
    }
    retreiveToken();
  }, []);

  if (retrieving) {
    return <LoadingOverlay />;
  }


  // Transition between authenticated user and unauthenticated user
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
