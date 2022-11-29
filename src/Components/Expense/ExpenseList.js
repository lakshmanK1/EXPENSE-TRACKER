import React, { useState, useCallback, useEffect } from 'react'

//styles comps
import { LI, ListContainer, ListData, ListDiv, UL } from './ExpenseStyledCMPS'

function ExpenseList() {

  
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


  return (
    <ListContainer>
        <ListDiv>
            <UL>
                {expenses.map((item)=>(
                    <LI key={item.id}><ListData>{`Category: ${item.category} -- Description: ${item.description} -- Price: ${item.amount}`}</ListData><button>delete</button></LI>
                ))}
            </UL>
        </ListDiv>
    </ListContainer>
  )
}

export default ExpenseList