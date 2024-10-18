import axios from "axios";
import { BackendUrl } from "../keys";

export async function storeExp(token,{title,price, date}){
    const expData={title:title, price:price, date:date};

    const response = await axios.post( BackendUrl+'/expenses.json?auth='+token,
        expData
    );
    const id = response.data.name;
    return id;
}

export async function fetchExp(token){
    const response = await axios.get(BackendUrl+'/expenses.json?auth='+token);

    const expenses = [];
    for(const key in response.data){
        const expenseObj={
            id:key,
            title:response.data[key].title,
            price:response.data[key].price,
            date:response.data[key].date,
        }
        expenses.push(expenseObj);
    }
    return expenses;
}

export  function updateExp(id, token,{title,price,date}){
    const expData= {title:title, price:price, date:date}
    return axios.put(BackendUrl + `/expenses/${id}.json?auth=${token}`,expData)
}
export function deleteExp(id,token){
    return axios.delete(BackendUrl+`/expenses/${id}.json?auth=${token}`);
}