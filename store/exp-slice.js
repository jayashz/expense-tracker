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

        updateExpense:(state, action)=>{
            const { id, title, price, date } = action.payload;

            const expenseToUpdate = state.exp.find(item => item.id === id);
            if (expenseToUpdate) {
                expenseToUpdate.title = title;
                expenseToUpdate.price = price;
                expenseToUpdate.date = date;
            }
        
        },
    }

});
export const {addExpense,deleteExpense,updateExpense} = expSlice.actions;
export default expSlice;