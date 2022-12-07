
import { ExpenseActions } from "./Expense-Slice";

let enteredEmail = localStorage.getItem('Email').replace('@','').replace('.','');


export const fetchDataHandler = () => {
    return async(dispatch)=>{
        const getData = async()=>{
            let response = await fetch(`https://expense-tracker-362e0-default-rtdb.firebaseio.com/ExpenseDetails/${enteredEmail}.json`);

            if(!response.ok){
                throw new Error('failed fetching data');
            }

            const data = response.json();
            return data;
        }
        try{
            let ExpenseData = await getData();
            console.log(ExpenseData);
            dispatch(ExpenseActions.replaceExpense(ExpenseData));
        }catch(err){
            console.log(err);
        }
    }
}

export const sendDataHandler = (ExpenseData) => {
    return async()=>{
        const sendExpense = async()=>{
            let response = await fetch(`https://expense-tracker-362e0-default-rtdb.firebaseio.com/ExpenseDetails/${enteredEmail}.json`,{
                method:"PUT",
                body:JSON.stringify(ExpenseData)
            });
            if(!response.ok){
                throw new Error("something went wrong, unable to send data");
            }
        }
        try{
            await sendExpense();
        }catch(err){
            console.log(err);
        }
    }
}

export const removeExpenseDetails = (expenseId) => {
    return async() => {
        const Delete = async() => {
            let response = await fetch(`https://expense-tracker-362e0-default-rtdb.firebaseio.com/ExpenseDetails/${enteredEmail}/${expenseId}.json`,{
                method:"DELETE"
            });
            
        }
        try{
            await Delete();
        }catch(err){
            console.log(err);
        }
    }
}