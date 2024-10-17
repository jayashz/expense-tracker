import { NavigationContainer } from "@react-navigation/native";
import Authenticate from "./Authenticate";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { useSelector } from "react-redux";
function Navigation() {
  const isAuthentic = useSelector(item=>item.Authenticate.isAuthenticated);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isAuthentic&&<Authenticate />}
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation;
