import React from 'react'
import { FlatList, Text, View } from 'react-native'
import ExpensesItems from './ExpensesItems'


function renderExpItem(itemData){
  return <ExpensesItems data={itemData.item} />
}
const ExpensesList = ({exps}) => {
  return (
    <FlatList data={exps} renderItem={renderExpItem} keyExtractor={(item)=> item.id}/>
  )
}

export default ExpensesList