import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Input from "./Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomBtn from "../../ui/CustomBtn";
import { Platform } from "react-native";
import { colors } from "../../../constants/Colors";
const ExpenseForm = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function priceInputHandler() {}
  function titleInputHandler() {}
  function onDateChange(e, selectedDate) {
    setDate(selectedDate);
    setOpen(false);
  }

  return (
    <View>
      <Input
        label="Title"
        inputConfig={{
          onChangeText: titleInputHandler,
          placeholder: "Title",
        }}
      />
      <Input
        label="Price"
        inputConfig={{
          keyboardType: "number-pad",
          onChangeText: priceInputHandler,
          placeholder: "Price",
        }}
      />
        <View style={styles.innerContainer}>
      {Platform.OS == "android" ? (
        <CustomBtn style={styles.cusBtn} onPress={() => setOpen(!open)}>
          {date.toDateString()}
        </CustomBtn>
      ) : (
        
            <DateTimePicker value={date} onChange={onDateChange} />
        
      )}

      {open && <DateTimePicker value={date} onChange={onDateChange} />}
      </View>
      
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  cusBtn: {
    marginTop: 20,
  },
  innerContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  }
});
