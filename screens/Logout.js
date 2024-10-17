import React from 'react'
import { View } from 'react-native'
import { colors } from '../constants/Colors'
import CustomBtn from '../component/ui/CustomBtn'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth-slicee';
const Logout = () => {
    const dispatch = useDispatch();

    function logOutHandler(){
        dispatch(logout());
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