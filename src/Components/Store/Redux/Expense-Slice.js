import  {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

const expenseInitialState = [
    {
      id: 1,
      category: "Clothes",
      description: "Shirt",
      price: '300'
    },
    {
      id: 2,
      category: "Food",
      description: "Biryani",
      price: '150'
    },
    {
      id: 3,
      category: "Furniture",
      description: "dinning table set",
      price: '4000'
    },
    {
      id: 4,
      category: "Bills",
      description: "Electricity bill",
      price: '650'
    },
    
    {
      id: 5,
      category: "Grocies",
      description: "rice and daal",
      price: '1500'
    },
  ];

  const ExpenseSlice = createSlice({
    name:'expense',
    initialState:{
        expenseInitialState,
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
        },
        getExpense : (state, action)=>{
            state.singleExpense = state.expenseInitialState.find((item) => item.id == action.payload);
        },

        addExpense : (state, action)=>{
        const newData = {...action.payload, id:uuidv4()};
        state.expenseInitialState = [newData, ...state.expenseInitialState]
        },

        deleteExpense : (state, action) => {
            state.expenseInitialState = state.expenseInitialState.filter((item) => item.id !== action.payload);
        },

        updateExpense : (state, action) => {
            state.expenseInitialState = state.expenseInitialState.map((item) => (
                item.id === action.payload.id ? action.payload : item
            ));
        }
    }
  });

  export const ExpenseActions = ExpenseSlice.actions;
  export default ExpenseSlice.reducer;