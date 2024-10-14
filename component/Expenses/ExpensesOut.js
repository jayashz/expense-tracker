import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesSumm from './ExpensesSumm'
import ExpensesList from './ExpList/ExpensesList'
import { colors } from '../../constants/Colors'
import { useSelector } from 'react-redux'
import { fetchExp } from '../../util/https'
import { setExpense } from '../../store/exp-slice'
import { useDispatch } from 'react-redux'
const ExpensesOut = ({expPeriod}) => {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.expenses.exp);

  useEffect(()=>{
    async function getExpenses() {
      const expenses = await fetchExp();

      dispatch(setExpense(expenses));
    }
    getExpenses();
  },[]);
  return (
    <View style={styles.mainContainer}>  
        <ExpensesSumm exps={data} periodName={expPeriod} />
        <ExpensesList exps={data}  />
    </View>
  )
}

export default ExpensesOut;

const styles= StyleSheet.create({
  mainContainer:{
    padding: 22,
    backgroundColor:colors.primary100,
    flex:1,
    overflow:'visible'
  }
});