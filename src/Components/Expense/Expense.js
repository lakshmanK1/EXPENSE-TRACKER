import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function Expense() {
    const [showList, setShowList] = useState(false);
  return (
    <div>
        <ExpenseForm/>
        <ExpenseList/>
    </div>
  )
}

export default Expense