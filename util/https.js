import axios from "axios";
const BackendUrl='https://my-expense-tracker-6ba25-default-rtdb.firebaseio.com';
export function storeExp({title,price, date}){
    const expData={title:title, price:price, date:date};

    axios.post( BackendUrl+'/expenses.json',
        expData
    );
}

export async function fetchExp(){
    const response = await axios.get(BackendUrl+'/expenses.json');

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