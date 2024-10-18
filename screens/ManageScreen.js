import React, { useLayoutEffect } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import IconBtn from "../component/ui/IconBtn";
import { colors } from "../constants/Colors";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../store/exp-slice";
import ExpenseForm from "../component/Expenses/ManageExp/ExpenseForm";
import { useSelector } from "react-redux";
import { deleteExp } from "../util/https";
import BackIcons from "../component/ui/BackIcons";

const ManageScreen = ({ route, navigation }) => {
  const editExpId = route.params?.expId;
  const isEditExpId = !!editExpId;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.expenses.exp);
  const token = useSelector((state) => state.authenticate.token);
  if (Platform.OS == "android") {
    navigation.setOptions({
      headerShown: false,
    });
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditExpId ? "Edit Expense" : "Add new Expense",
    });
  }, [navigation, isEditExpId]);

  async function deleteHandler() {
    dispatch(deleteExpense(editExpId));
    await deleteExp(editExpId, token);
    navigation.goBack();
  }

  const selectedExp = data.find((item) => item.id == editExpId); //Grabs the selected expense from the main screens.

  return (
    <View style={styles.container}>
      {Platform.OS == "android" ? (
        <>
          <BackIcons />
          <Text style={styles.header}>
            {editExpId ? "Edit your expense" : "Add your expense"}
          </Text>
        </>
      ) : (
        ""
      )}

      <ExpenseForm selectedExp={selectedExp} />

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.secondary,
  },
  btnContainer: {
    marginTop: 16,
    paddingTop: 6,
    borderTopWidth: 2,
    borderTopColor: colors.primary100,
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 35,
    marginVertical:30,
    fontWeight:'bold',
    color:colors.primary300
  },
});
