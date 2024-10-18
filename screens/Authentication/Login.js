import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, View } from "react-native";
import AuthForm from "../../component/Auth/AuthForm";
import BackIcons from "../../component/ui/BackIcons";
import { colors } from "../../constants/Colors";
import { authenticateUser } from "../../util/auth";
import LoadingOverlay from "../../component/ui/LoadingOverlay";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store/auth-slicee";

const Login = () => {
  const mode = "signInWithPassword";
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function authenticationHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await authenticateUser(mode, email, password);
      dispatch(authenticate(token));
    } catch (error) {
      Alert.alert(
        "Authentication failed!!",
        "Cant login with your credentials."
      );
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay />;
  }
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ position: "relative", }}>
        <View style={{ padding: 24}}>
          <BackIcons />

          <Image
            source={require("../../assets/login_1000997.png")}
            style={{ width: 150, height: 150, alignSelf: "center" }}
          />
        </View>
      </SafeAreaView>

      <View style={style.innerContainer}>
        <AuthForm state="login" onAuthenticate={authenticationHandler} />
      </View>
    </View>
  );
};

export default Login;
const style = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderRadius: 30,
    padding: 30,
    marginTop: 10,
  },
});
