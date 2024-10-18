import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const iconBtn = ({ icon, size, color, onPress }) => {
  function pressHandler() {
    onPress();
  }
  return (
      <Pressable onPress={pressHandler} style={({pressed})=>pressed ? styles.pressed: ''} >
        <View>
          <AntDesign name={icon} size={size} color={color} />
        </View>
      </Pressable>
  );
};

export default iconBtn;
const styles = StyleSheet.create({
  pressed:{
    opacity:0.7,
  }
});
