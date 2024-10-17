import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const AuthForm = ({ state, }) => {
  const navigation = useNavigation();
  function submitHandler() {
    console.warn("pressed");
  }
  function stateChange(){
    if(state=='login'){
      navigation.navigate('signup');
    }
    else{
      navigation.navigate('login');
    }
  }
  return (
    <View>
      <Text style={styles.label}>Email Address</Text>
      <TextInput style={styles.inp} />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.inp} />

      {state=='login'&&<TouchableOpacity style={{ alignItems: "flex-end", marginTop: 2 }}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>}

      <TouchableOpacity style={styles.submit}>
        <Text style={[styles.label, { color: "white", fontWeight: "600" }]}>
          {state=='login'? 'Login': 'SignUp'}
        </Text>
      </TouchableOpacity>

      <View style={styles.userQues}>
        <Text style={styles.label}>{state=='login'?'Create a new account?':'Already have an account?'}</Text>
        <TouchableOpacity><Text style={{color:colors.primary,fontSize:15}} onPress={stateChange}>{state=='login'?"SignUp":"Login"}</Text></TouchableOpacity>
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
  userQues:{
    flexDirection:'row',
    marginTop:10,
    justifyContent:'center'
  }
});
