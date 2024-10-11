import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";

const ExpensesSumm = ({periodName,exps}) => {
    const total = exps.reduce((sum,exp)=>{
        return sum + exp.price;
    },0);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
      <Text style={styles.text}>{periodName}</Text>
      <Text style={styles.text}>Rs. {total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ExpensesSumm;

const styles=StyleSheet.create({
  rootContainer:{
    backgroundColor:colors.primary300,
    height:40,
    justifyContent:'center',
    borderRadius:20
  },
  innerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20
  },
  text:{
    fontSize:18,
    color:colors.secondary
  }
});