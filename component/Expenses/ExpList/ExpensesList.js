import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ExpensesItems from './ExpensesItems'
import { colors } from '../../../constants/Colors'


function renderExpItem(itemData){
  return <ExpensesItems data={itemData.item} />
}
const ExpensesList = ({exps}) => {
  let content=<Text style={styles.text}>No saved expenses.</Text>
  if(exps.length>0){
    content=<FlatList data={exps} renderItem={renderExpItem} keyExtractor={(item)=> item.id}/>
  }
  return (
    <>
    {content}
    </>
  )
}

export default ExpensesList
const styles= StyleSheet.create({
  text:{
    marginTop:20,
    textAlign:'center',
    color:colors.primary300,
    fontSize:19,
  }
}); 