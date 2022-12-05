import {configureStore} from '@reduxjs/toolkit'
import ExpenseReducers from './Expense-Slice'
import AuthReducers from './Auth-Slice'


const Store = configureStore({
    reducer:{Auth:AuthReducers, Expense:ExpenseReducers}
});

export default Store;