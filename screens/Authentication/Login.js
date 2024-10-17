import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AuthForm from "../../component/Auth/AuthForm";
import Ionicons from "@expo/vector-icons/Ionicons";
import BackIcons from "../../component/ui/BackIcons";
import { colors } from "../../constants/Colors";

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ position: "relative" }}>
        <BackIcons />

        <Image
          source={require("../../assets/login_1000997.png")}
          style={{width:150,height:150,alignSelf:'center'}}
        />
      </SafeAreaView>

      <View style={style.innerContainer}>
        <AuthForm state='login' />
      </View>
    </View>
  );
};

export default Login;
const style = StyleSheet.create({
  innerContainer: {
    flex:1,
    backgroundColor:colors.secondary,
    borderRadius:30,
    padding:30,
    marginTop:10
  },
});
