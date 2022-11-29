import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function Expense() {
  return (
    <div>
        <ExpenseForm/>
        <ExpenseList/>
    </div>
  )
}

export default Expense