import {configureStore} from '@reduxjs/toolkit'
import ExpenseReducers from './Expense-Slice'
import AuthReducers from './Auth-Slice'
import themeReducers from './Theme-Slice'


const Store = configureStore({
    reducer:{Auth:AuthReducers, Expense:ExpenseReducers, Theme:themeReducers}
});

export default Store;