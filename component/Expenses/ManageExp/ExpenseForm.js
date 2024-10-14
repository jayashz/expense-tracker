import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Input from "./Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomBtn from "../../ui/CustomBtn";
import { Platform } from "react-native";
import { colors } from "../../../constants/Colors";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addExpense } from "../../../store/exp-slice";
const ExpenseForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const editExpId = route.params?.expId;
  const isEditExpId = !!editExpId;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("0");
  const [date, setDate] = useState(new Date());

  const [open, setOpen] = useState(false);

  function onDateChange(e, selectedDate) {
    setDate(selectedDate);
    setOpen(false);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    console.log(date.toISOString);
    dispatch(addExpense({ title: title, price: price, date: date.toISOString() }));
    navigation.goBack();
  }

  return (
    <View>
      <Input
        label="Title"
        inputConfig={{
          onChangeText: (e) => setTitle(e),
          textAlign: "center",
          value: title,
        }}
      />

      <Input
        label="Price"
        inputConfig={{
          keyboardType: "number-pad",
          onChangeText: (e) => setPrice(e),
          textAlign: "center",
          value: price,
        }}
      />
      <View style={styles.innerContainer}>
        {Platform.OS == "android" ? (
          <CustomBtn style={styles.cusBtn} onPress={() => setOpen(!open)}>
            {date.toDateString()}
          </CustomBtn>
        ) : (
          <DateTimePicker
            accentColor={colors.primary300}
            value={date}
            onChange={onDateChange}
          />
        )}

        {open && <DateTimePicker value={date} onChange={onDateChange} />}
      </View>
      <View style={styles.btnsContainer}>
        <CustomBtn mode="flat" onPress={cancelHandler}>
          Cancel
        </CustomBtn>
        <CustomBtn onPress={confirmHandler}>
          {isEditExpId ? "Update" : "Add"}
        </CustomBtn>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  cusBtn: {
    marginTop: 20,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
