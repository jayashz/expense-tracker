import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/Colors";

const CustomBtn = ({ children, onPress, mode }) => {
  return (
    <View>
      <Pressable onPress={onPress} style={({pressed})=>pressed? styles.pressed:''}>
        <View style={[styles.btn, mode === "flat" && styles.flat]}>
          <Text style={[styles.btnText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomBtn;
const styles = StyleSheet.create({
  btn: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: colors.primary100,
    minWidth:150
  },
  flat: {
    backgroundColor: "transparent",
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: colors.primary300,
  },
  pressed: {
    opacity: 0.7,
    borderRadius: 4,
    backgroundColor:colors.primary100
  },
});
