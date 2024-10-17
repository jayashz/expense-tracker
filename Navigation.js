import { NavigationContainer } from "@react-navigation/native";
import Authenticate from "./Authenticate";
import React from "react";
import { Provider, useSelector } from "react-redux";

import store from "./store/store";

function Navigation() {
  // 
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Authenticate />
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation;
