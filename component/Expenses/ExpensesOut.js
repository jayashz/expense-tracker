import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpensesSumm from "./ExpensesSumm";
import ExpensesList from "./ExpList/ExpensesList";
import { colors } from "../../constants/Colors";
import { useSelector } from "react-redux";
import { fetchExp } from "../../util/https";
import { setExpense } from "../../store/exp-slice";
import { useDispatch } from "react-redux";
const ExpensesOut = ({ expPeriod }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.expenses.exp);

  const presentDate = new Date();
  const presentDay = presentDate.getDate();
  const presentMonth = presentDate.getMonth() + 1;
  const presentYear = presentDate.getFullYear();
  const presentDatee = new Date(presentYear, presentMonth - 1, presentDay);
  const sevenDaysAgo = new Date(presentYear, presentMonth - 1, presentDay - 7);

  const filteredData = data.filter((exp) => {
    const expDate = new Date(exp.date);
    const expYear = expDate.getFullYear();
    const expMonth = expDate.getMonth() + 1;
    const expDay = expDate.getDate();

    if (
      expYear == presentYear &&
      expMonth == presentMonth &&
      expDay >= presentDay - 7 &&
      expDay < presentDay
    ) {
      return exp;
    }
    
  });
  console.log(filteredData);
  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExp();

      dispatch(setExpense(expenses));
    }
    getExpenses();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <ExpensesSumm
        exps={expPeriod == "Total" ? data : filteredData}
        periodName={expPeriod}
      />
      <ExpensesList exps={expPeriod == "Total" ? data : filteredData} />
    </View>
  );
};

export default ExpensesOut;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 22,
    backgroundColor: colors.primary100,
    flex: 1,
    overflow: "visible",
  },
});
