import  {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

const expenseInitialState = [
    {
      id: 1,
      category: "Clothes",
      description: "Shirt",
      price: '0'
    }
  ];

  const ExpenseSlice = createSlice({
    name:'expense',
    initialState:{
        expenseInitialState,
        totalExpenseAmount : 0,
        singleExpense:{
            category:'',
            description:'',
            price:''
        }
    },
    reducers:{
        replaceExpense : (state, action) => {
            state.expenseInitialState = action.payload.expenseInitialState;
            state.singleExpense = action.payload.singleExpense;
            state.totalExpenseAmount = action.payload.totalExpenseAmount;
        },
        getExpense : (state, action)=>{
            state.singleExpense = state.expenseInitialState.find((item) => item.id == action.payload);
        },

        addExpense : (state, action)=>{
        const newData = {...action.payload, id:uuidv4()};
        state.expenseInitialState = [newData, ...state.expenseInitialState];
        console.log(newData.price);
        state.totalExpenseAmount = state.totalExpenseAmount + Number(newData.price);
        },

        deleteExpense : (state, action) => {
            state.expenseInitialState = state.expenseInitialState.filter((item) => item.id !== action.payload.expenseInitialState);
            state.totalExpenseAmount = action.payload.totalExpenseAmount;
        },

        updateExpense : (state, action) => {
            state.expenseInitialState = state.expenseInitialState.map((item) => (
            item.id === action.payload.expenseInitialState.id ? action.payload.expenseInitialState : item
            ));
            state.totalExpenseAmount =state.totalExpenseAmount + action.payload.totalExpenseAmount;
        }
    }
  });

  export const ExpenseActions = ExpenseSlice.actions;
  export default ExpenseSlice.reducer;