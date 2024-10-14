import { createSlice } from "@reduxjs/toolkit";

const expSlice= createSlice({
    name:'expenses',
    initialState:{
        exp:[],
    },
    reducers:{
        addExpense:(state,action)=>{
            const newExp = action.payload;
            state.exp.push({
                id:Math.floor(Math.random()*1000),
                title:newExp.title,
                price:newExp.price,
                date:newExp.date,
            })
        },
        deleteExpense:(state,action)=>{
            const expId= action.payload;
            state.exp = state.exp.filter((item)=>item.id !== expId);
        },

        updateExpense:(id,{desc, price, date})=>{
            
            
        },
    }

});
export const {addExpense,deleteExpense} = expSlice.actions;
export default expSlice;