import {configureStore} from '@reduxjs/toolkit'
import ExpenseReducers from './Expense-Slice'


const Store = configureStore({
    reducer:{Expense:ExpenseReducers}
});

export default Store;