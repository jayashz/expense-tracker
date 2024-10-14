import React, { useState } from "react";
import { Button, View } from "react-native";
import Input from "./Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomBtn from "../../ui/CustomBtn";
import { Platform } from "react-native";
const ExpenseForm = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);

  function priceInputHandler() {
    
  }
  function titleInputHandler(){

  }
  function onDateChange(e, selectedDate){
    setDate(selectedDate);
  }
  

  return (
    <View>
      <Input
        label="Title"
        inputConfig={{
          onChangeText: titleInputHandler
        }}
      />
      <Input
        label="Price"
        inputConfig={{
          keyboardType: "number-pad",
          onChangeText: priceInputHandler,
        }}
      />
      {Platform.OS == 'android'?<CustomBtn onPress={() => setOpen(!open)}>{date.toDateString()}</CustomBtn> : ''}
      <DateTimePicker 
      value={date}
      onChange={onDateChange}
      />
    </View>
  );
};

export default ExpenseForm;
