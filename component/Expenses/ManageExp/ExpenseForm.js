import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Input from "./Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomBtn from "../../ui/CustomBtn";
import { Platform } from "react-native";
import { colors } from "../../../constants/Colors";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addExpense, updateExpense } from "../../../store/exp-slice";
import { storeExp, updateExp } from "../../../util/https";
import LoadingOverlay from "../../ui/LoadingOverlay";
import { useSelector

 } from "react-redux";
const ExpenseForm = ({ selectedExp }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting]= useState(false);
  const token = useSelector(state=>state.authenticate.token);

  const editExpId = route.params?.expId;
  const isEditExpId = !!editExpId;

  const [title, setTitle] = useState(selectedExp ? selectedExp.title : "");
  const [price, setPrice] = useState(selectedExp ? selectedExp.price : "");
  const [date, setDate] = useState(
    selectedExp ? new Date(selectedExp.date) : new Date()
  );

  const [open, setOpen] = useState(false);

  function onDateChange(e, selectedDate) {
    setDate(selectedDate);
    setOpen(false);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler() {
    let validInput = false;
    setIsSubmitting(true);
    

    if(title.trim().length > 0 && Number(price) > 0) {
      validInput = true;
    }
    
    if (isEditExpId && validInput) {
      
      await updateExp(editExpId,token, {
        title: title,
        price: price,
        date: date.toISOString(),
      });
      dispatch(
        updateExpense({
          id: editExpId,
          title: title,
          price: price,
          date: date.toISOString(),
        })
      );
    } else if (!isEditExpId && validInput) {

      const id = await storeExp(token,{
        title: title,
        price: price,
        date: date.toISOString(),
      });
      dispatch(
        addExpense({
          id: id,
          title: title,
          price: price,
          date: date.toISOString(),
        })
      );
    } else {
      Alert.alert("Invalid input!!", "Check your inputs and try again");
      return;
    }
    setIsSubmitting(false);
    navigation.goBack();
  }

  if(isSubmitting){
    return <LoadingOverlay />
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
