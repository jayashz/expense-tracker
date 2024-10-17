import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { StyleSheet } from "react-native";
import CustomBtn from "../../component/ui/CustomBtn";
const Welcome = ({navigation}) => {

  function toLogin(){
    navigation.navigate('login');
  }
  function toSignUp(){
    navigation.navigate('signup')
  }
  return (
    <ImageBackground
      source={require("../../assets/jakub-zerdzicki-4rTXOMv28VA-unsplash.jpg")}
      style={{ flex: 1 }}
    >
      <View style={style.Container}>
        <Text style={style.heading}>WELCOME</Text>
        <View style={style.innerContainer}>

            <CustomBtn onPress={toLogin}>Login</CustomBtn>
            <CustomBtn onPress={toSignUp}>Signup</CustomBtn>

        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  heading:{
    color:'white',
    fontSize:50,
    fontWeight:'900'
  },
  innerContainer:{
    marginTop:40,
    gap:7,
    maxWidth:300,
    width:'80%',
    padding:12,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius:8,
  },
  
  
});
