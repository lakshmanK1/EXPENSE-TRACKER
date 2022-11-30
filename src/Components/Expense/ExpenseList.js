import React, { useState, useCallback, useEffect } from 'react'
import {BiCategory} from 'react-icons/bi'
import {BsChatSquareText} from 'react-icons/bs'
import {TbCurrencyRupee} from 'react-icons/tb'

//styles comps
import { LI, ListContainer, ListData, ListDiv, UL, RemoveBTN, EditBTN } from './ExpenseStyledCMPS'

function ExpenseList(props) {

  
  const enteredEmail = localStorage.getItem('email').replace('@','').replace('.','');

  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://expense-tracker-362e0-default-rtdb.firebaseio.com/${enteredEmail}.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong...retrying");
      }

      const data = await response.json();
      console.log(data);

      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          id: key,
          category: data[key].category,
          description: data[key].description,
          amount: data[key].amount
        });
      }

      setExpenses(transformedData);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  function deleteExpenseHandler(id) {
    const response = fetch(
      `https://expense-tracker-362e0-default-rtdb.firebaseio.com/${enteredEmail}/${id}.json`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Expense successfully deleted");
    }
  }



  const editExpense = (item)=>{
    const filteredList = expenses.filter((lst)=>lst.description===item.description);
    for( let i = 0; i < expenses.length; i++){ 

        if ( expenses[i] === filteredList[0]) { 

            const amount = prompt('Enter the Amount', expenses[i].amount);
            const description  = prompt('Enter the Description', expenses[i].description);
            const category = prompt('Enter the Category', expenses[i].category);
            expenses.splice(i, 1,{amount:amount,description:description,category:category});
        }
        reqPUT(expenses).then(res=>{setExpenses([...expenses])})
    }
}


async function reqPUT(expenseList){
    const response = await fetch(`https://expense-tracker-362e0-default-rtdb.firebaseio.com/${enteredEmail}.json`,
    {
        method:'PUT',
        body:JSON.stringify(expenseList)
    })
}


  return (
    <ListContainer>
        <ListDiv>
            <UL>
                {expenses.map((item)=>(
                    <LI key={item.id}><ListData><BiCategory style={{marginLeft:'15px',marginRight:'10px',color:'#2192ff'}}/>Category: {item.category}  <BsChatSquareText style={{marginLeft:'10px',marginRight:'10px',color:'#2192ff'}}/>Description: {item.description}  <TbCurrencyRupee style={{marginLeft:'10px',marginRight:'10px',color:'#2192ff'}}/>Price: {item.amount}</ListData>
                    <RemoveBTN onClick={()=>deleteExpenseHandler(item.id)}>Delete</RemoveBTN><EditBTN onClick={()=>editExpense(item)}>Edit</EditBTN></LI>
                ))}
            </UL>
        </ListDiv>
    </ListContainer>
  )
}

export default ExpenseList