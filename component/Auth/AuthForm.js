import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const AuthForm = ({ onAuthenticate, state }) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  
  function submitHandler() {
    const isValidEmail=(email.trim().includes("@"));
    const isValidPassword=(password.trim().length > 6);
    const isPasswordConfirmed=(password.trim() === confirmPassword.trim());

    if (state == "login") {
      if (isValidEmail && isValidPassword) {
        onAuthenticate({email,password})
      } else {
        Alert.alert("Invalid input!!", "Check your email and password.");
      }
    } else {
      if (isValidEmail && isValidPassword && isPasswordConfirmed) {
        onAuthenticate({ email, password });
      } else {
        Alert.alert("Invalid input!!", "Check your email and password.");
      }
    }
  }
  function stateChange() {
    if (state == "login") {
      navigation.navigate("signup");
    } else {
      navigation.navigate("login");
    }
  }

  function updateInputHandler(inpType, enteredValue) {
    switch (inpType) {
      case "email":
        setEmail(enteredValue);
        break;
      case "password":
        setPassword(enteredValue);
        break;
      case "confirmPassword":
        setConfirmPassword(enteredValue);
        break;
    }
  }

  return (
    <View>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.inp}
        onChangeText={updateInputHandler.bind(this, "email")}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        inputMode="email"
      />

        <Text style={styles.label}>Password</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',position:'relative'}}>
        <TextInput
          style={[styles.inp,{flex:1}]}
          onChangeText={updateInputHandler.bind(this, "password")}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          secureTextEntry={showPassword?false:true}
        />
        <TouchableOpacity onPress={()=>setShowPassword(!showPassword)} style={{position:'absolute',transform: [{ translateX: 1/2 }],right:-24}}>{showPassword?<Ionicons name="eye" size={24} color="black" />:<Ionicons name="eye-off" size={24} color="black" />}</TouchableOpacity>
      </View>
      {state == "login" ? (
        ""
      ) : (
        <>
          <Text style={styles.label}>Confirm password</Text>
          <TextInput
            style={styles.inp}
            onChangeText={updateInputHandler.bind(this, "confirmPassword")}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            secureTextEntry={showPassword?false:true}
          />
        </>
      )}

      {state == "login" && (
        <TouchableOpacity style={{ alignItems: "flex-end", marginTop: 2 }}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      )}

      {/* submit Button */}
      <TouchableOpacity style={styles.submit} onPress={submitHandler}>
        <Text style={[styles.label, { color: "white", fontWeight: "600" }]}>
          {state == "login" ? "Login" : "SignUp"}
        </Text>
      </TouchableOpacity>

      <View style={styles.userQues}>
        <Text style={styles.label}>
          {state == "login"
            ? "Create a new account?"
            : "Already have an account?"}
        </Text>
        <TouchableOpacity onPress={stateChange}>
          <Text style={{ color: colors.primary, fontSize: 15 }}>
            {state == "login" ? "SignUp" : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  inp: {
    backgroundColor: colors.primary100,
    padding: 8,
    borderRadius: 12,
    marginBottom: 5,

  },
  submit: {
    backgroundColor: colors.primary300,
    marginTop: 20,
    padding: 9,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  userQues: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
});
