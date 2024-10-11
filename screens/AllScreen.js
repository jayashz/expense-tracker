import React from 'react'
import { Text, View } from 'react-native'
import ExpensesOut from '../component/Expenses/ExpensesOut'

const AllScreen = () => {
  return (
    <ExpensesOut expPeriod='Total'/>
  )
}

export default AllScreen