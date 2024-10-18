import React from 'react'
import { View } from 'react-native'
import { colors } from '../constants/Colors'
import CustomBtn from '../component/ui/CustomBtn'
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth-slicee';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Logout = () => {
    const dispatch = useDispatch();

    function logOutHandler(){
        dispatch(logout());
        AsyncStorage.removeItem('token')
    }
  return (
    <View style={{flex:1,backgroundColor:colors.primary100, justifyContent:'center',alignItems:'center'}}>  
        <View>
            <CustomBtn onPress={logOutHandler}>Logout</CustomBtn>
        </View>
    </View>
  )
}

export default Logout