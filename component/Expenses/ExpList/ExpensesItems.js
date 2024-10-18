import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
const ExpensesItems = ({ data }) => {
    const navigation = useNavigation();
    function pressHandler(){
        navigation.navigate('ManageExp',{
            expId:data.id,
        });
    }
  return (
    <Pressable onPress={pressHandler} style={({pressed})=> pressed ? styles.pressed:'' }>
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 17 }]}>
            {data.title}
          </Text>
          <Text style={[styles.text, { fontSize: 14 }]}>
            {new Date(data.date).toDateString()}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Rs. {data.price}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensesItems;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.primary300,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "##7253b5",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    alignContent: "center",
  },
  text: {
    color: colors.secondary,
  },
  priceText: {
    color: colors.primary,
    fontSize: 16,
    textAlign: "center",
  },
  priceContainer: {
    backgroundColor: colors.primary100,
    justifyContent: "center",
    borderRadius: 8,
    padding: 4,
    minWidth: 90,
  },
  pressed:{
    opacity:0.7,
  }
});
