import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../../constants/Colors";

const Input = ({inputConfig}) => {
  return (
    <View style={styles.container}>
      <TextInput {...inputConfig} />
    </View>
  );
};

export default Input;

const styles= StyleSheet.create({
    container:{
        backgroundColor:colors.primary100,
        marginVertical:10,
        padding:5,
        borderRadius:5
    }
});

