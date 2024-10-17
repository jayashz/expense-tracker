import React, { useContext, useState } from "react";
import { View, Image, SafeAreaView, StyleSheet, Alert } from "react-native";
import BackIcons from "../../component/ui/BackIcons";
import AuthForm from "../../component/Auth/AuthForm";
import { colors } from "../../constants/Colors";
import { authenticateUser } from "../../util/auth";
import LoadingOverlay from "../../component/ui/LoadingOverlay";

const Signup = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const mode = "signUp";



  async function signup({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await authenticateUser(mode, email, password);

    } catch (error) {
      Alert.alert('SignUp failed!!','Try again later.');
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay />;
  }
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ position: "relative" }}>
        <BackIcons />

        <Image
          source={require("../../assets/add-user.png")}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        />
      </SafeAreaView>

      <View style={style.innerContainer}>
        <AuthForm state="signup" onAuthenticate={signup} />
      </View>
    </View>
  );
};

export default Signup;
const style = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderRadius: 30,
    padding: 30,
    marginTop: 10,
  },
});
