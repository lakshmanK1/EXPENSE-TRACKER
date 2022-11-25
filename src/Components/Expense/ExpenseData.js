import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList';


function ExpenseData(props) {
    const [FormData, setFormData] = useState([]);

    const handleFormData = (data) => {
        setFormData((prevData)=>{
          return [...prevData, data];
        });
    }

  return (
    <div>
        <ExpenseForm details={handleFormData} HidingForm={props.hide}/>
        <ExpenseList value={FormData}/>
    </div>
  )
}

export default ExpenseData