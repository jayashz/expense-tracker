import React, { useLayoutEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import IconBtn from "../component/ui/IconBtn";
import { colors } from "../constants/Colors";
import CustomBtn from "../component/ui/CustomBtn";
import { useDispatch } from "react-redux";
import { addExpense,deleteExpense } from "../store/exp-slice";
import ExpenseForm from "../component/Expenses/ManageExp/ExpenseForm";


const ManageScreen = ({ route, navigation }) => {
  const editExpId = route.params?.expId;
  const isEditExpId = !!editExpId;
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditExpId ? "Edit Expense" : "Add new Expense",
    });
  }, [navigation, isEditExpId]);

  function cancelHandler(){
    navigation.goBack();
  }

  function confirmHandler(){
    navigation.goBack();
  }

  function deleteHandler(){
    dispatch(deleteExpense(editExpId));
    navigation.goBack();
  }
  
  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.btnsContainer}>
        <CustomBtn mode='flat' onPress={cancelHandler}>Cancel</CustomBtn>
        <CustomBtn onPress={confirmHandler}>{isEditExpId? 'Update':'Add'}</CustomBtn>
      </View>
      {isEditExpId && (
        <View style={styles.btnContainer}>
        <IconBtn
          icon="delete"
          size={27}
          color={colors.error}
          onPress={deleteHandler}
        />
        </View>
      )}
    </View>
  );
};

export default ManageScreen;
const styles= StyleSheet.create({
  container:{
   flex:1,
   padding:24,
   backgroundColor:colors.secondary,
  },
  btnContainer:{
    marginTop:16,
    paddingTop:6,
    borderTopWidth:2,
    borderTopColor:colors.primary100,
    alignItems:'center',
  },
  btnsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  }
})