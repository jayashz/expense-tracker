import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/Colors";
import CustomBtn from "../ui/CustomBtn";

const AuthForm = ({ state }) => {
  function submitHandler() {
    console.warn("pressed");
  }
  return (
    <View>
      <Text style={styles.label}>Email Address</Text>
      <View style={styles.inp}>
        <TextInput />
      </View>
      <Text style={styles.label}>Password</Text>
      
      <TextInput style={styles.inp} />
      <TouchableOpacity style={{ alignItems: "flex-end", marginTop: 2 }}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submit}>
        <Text style={[styles.label,{color:'white',fontWeight:'600'}]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: colors.primary,
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
    justifyContent:'center',
    alignItems:'center'
  },
});
