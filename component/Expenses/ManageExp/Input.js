import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../../constants/Colors";

const Input = ({label,inputConfig}) => {
  return (
    <View >
        <Text style={styles.label}>{label}</Text>
      <TextInput {...inputConfig} style={styles.container} />
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
    },
    label:{
        textAlign:'center',
        color:colors.primary300,
        fontWeight:'600'
    }
});

