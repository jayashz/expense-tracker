import { NavigationContainer } from "@react-navigation/native";
import Authenticate from "./Authenticate";
import React from "react";

function App() {
  return (
    <>
      <NavigationContainer>
        <Authenticate />
      </NavigationContainer>
    </>
  );
}

export default App;
