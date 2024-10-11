import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesSumm from './ExpensesSumm'
import ExpensesList from './ExpList/ExpensesList'
import { colors } from '../../constants/Colors'

const dummy_exp = [
  {
    id:'d1',
    title:'A pair of shoes',
    price:5000,
    date: new Date('2021-12-4'),
  },
  {
    id:'d2',
    title:'A pair of pants',
    price:3000,
    date: new Date('2021-12-6'),
  },
  {
    id:'d4',
    title:'A pair of shocks',
    price: 600,
    date: new Date('2021-12-9'),
  },
]

const ExpensesOut = ({expenses, expPeriod}) => {

  return (
    <View style={styles.mainContainer}>  
        <ExpensesSumm exps={dummy_exp} periodName={expPeriod} />
        <ExpensesList exps={dummy_exp}  />
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