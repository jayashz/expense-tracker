import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const iconBtn = ({ icon, size, color, onPress }) => {
  function pressHandler() {
    onPress();
  }
  return (
    <View style={styles.top}>
      <Pressable onPress={pressHandler} style={({pressed})=>pressed ? styles.pressed: ''} >
        <View>
          <AntDesign name={icon} size={size} color={color} />
        </View>
      </Pressable>
    </View>
  );
};

export default iconBtn;
const styles = StyleSheet.create({
  top: {
    marginRight: 10,
  },
  pressed:{
    opacity:0.7,
  }
});
