import React from 'react'
import { Text, View } from 'react-native'
import ExpensesOut from '../component/Expenses/ExpensesOut'

const RecentScreen = () => {
  return (
    <ExpensesOut expPeriod='Last 7 days'/>
  )
}

export default RecentScreen