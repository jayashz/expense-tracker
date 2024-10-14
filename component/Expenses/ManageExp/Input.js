import React from "react";
import { Text, TextInput, View } from "react-native";

const Input = ({label,inputConfig}) => {
  return (
    <View>
        <Text>{label}</Text>
      <TextInput {...inputConfig} />
    </View>
  );
};

export default Input;

