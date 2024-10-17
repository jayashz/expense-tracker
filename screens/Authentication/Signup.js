import React from 'react'
import {  View,Image,SafeAreaView,StyleSheet } from 'react-native';
import BackIcons from '../../component/ui/BackIcons';
import AuthForm from '../../component/Auth/AuthForm';
import { colors } from '../../constants/Colors';
const Signup = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ position: "relative" }}>
        <BackIcons />

        <Image
          source={require("../../assets/add-user.png")}
          style={{width:150,height:150,alignSelf:'center'}}
        />
      </SafeAreaView>

      <View style={style.innerContainer}>
        <AuthForm state='signup' />
      </View>
    </View>
  )
}

export default Signup;
const style = StyleSheet.create({
  innerContainer: {
    flex:1,
    backgroundColor:colors.secondary,
    borderRadius:30,
    padding:30,
    marginTop:10
  },
});