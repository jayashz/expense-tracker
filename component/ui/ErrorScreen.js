import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../constants/Colors";
import CustomBtn from "./CustomBtn";

export default function ErrorScreen({message,onConfirm}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text,styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>
        {message}
      </Text>
      <CustomBtn onPress={onConfirm}>Okay</CustomBtn>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:colors.primary100
    },
    text:{
        textAlign:'center',
        marginBottom:8,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',

    },

})