import { createSlice } from "@reduxjs/toolkit";

const expSlice= createSlice({
    name:'expenses',
    initialState:{
        exp:[
            
        ],
    },
    reducers:{
        addExpense:(state,action)=>{
            const newExp = action.payload;
            state.exp.push({
                id:Math.floor(Math.random()*100),
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
            const updateExp = action.payload;
            const updateExpIndex = state.exp.findIndex((item)=>item.id == updateExp.id);
            
        },
    }

});
export const {addExpense,deleteExpense} = expSlice.actions;
export default expSlice;