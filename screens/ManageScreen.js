import React from 'react'
import { Text, View } from 'react-native'

const ManageScreen = ({route,navigation}) => {
  const editExpId = route.params?.expId;
  const isEditExpId = !!editExpId;
  navigation.setOptions({
    title: isEditExpId ? 'Edit Expense':'Add new Expense',
  });
  return (
    <View>
        
    </View>
  )
}

export default ManageScreen