import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import Modal from '../Modal/Modal';
import ExpenseList from './ExpenseList';


//styled components
import { Expenseform, Container, ExpenseLabel, ExpenseInput, ExpenseBTN, ExpenseSelect, Expenseoption, CancelIcon } from './ExpenseStyledCMPS'

function ExpenseForm(props) {

    const userInputMoney = useRef();
    const userInputDescrip = useRef();
    const userInputSelect = useRef();

    const [expenses, setExpenses] = useState([]);


    const enteredEmail = localStorage.getItem('email').replace('@','').replace('.','');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const enteredMoney = userInputMoney.current.value;
        const enteredDescrip = userInputDescrip.current.value;
        const enteredSelect = userInputSelect.current.value;

        const userData = {
            category:enteredSelect,
            description:enteredDescrip,
            amount:enteredMoney   
        }

        async function addHandler(NewMovieObj) {
            const response = await fetch(
              `https://expense-tracker-362e0-default-rtdb.firebaseio.com/${enteredEmail}.json`,
              {
                method: "POST",
                body: JSON.stringify(NewMovieObj),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();
            console.log(data);
          }
        addHandler(userData);
    } 

    
  return (
    <Modal>
    <Container>
      <Expenseform onSubmit={handleFormSubmit}>
      <CancelIcon><MdOutlineCancel style={{width:'30px', height:'30px', color:'white', backgroundColor:'red',borderRadius:'5px'}}
      onClick={props.onHide}
      /></CancelIcon><br/>

          <ExpenseLabel htmlFor='money'>Money spent:</ExpenseLabel>
          <ExpenseInput type='number' id='money' ref={userInputMoney} required/>

          <ExpenseLabel htmlFor='descrip'>Description:</ExpenseLabel>
          <ExpenseInput type='text' id='descrip' ref={userInputDescrip} required/><br/>

          <ExpenseLabel htmlFor='select' >Category:</ExpenseLabel>
          <ExpenseSelect ref={userInputSelect} id='select' required>
              <Expenseoption>Food</Expenseoption>
              <Expenseoption>Groceries</Expenseoption>
              <Expenseoption>clothes</Expenseoption>
              <Expenseoption>Petrol/Diesel</Expenseoption>
              <Expenseoption>Furniture</Expenseoption>
          </ExpenseSelect><br/>
          <ExpenseBTN  type='submit'>ADD</ExpenseBTN>
      </Expenseform>
    </Container>
    </Modal>
  )
}

export default ExpenseForm