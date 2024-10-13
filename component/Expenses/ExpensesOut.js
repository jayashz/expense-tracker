import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesSumm from './ExpensesSumm'
import ExpensesList from './ExpList/ExpensesList'
import { colors } from '../../constants/Colors'
import { useSelector } from 'react-redux'


const ExpensesOut = ({expenses, expPeriod}) => {
  const data = useSelector(state=>state.expenses.exp);

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