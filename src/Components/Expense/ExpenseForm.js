import React, { useRef } from 'react'
import {MdOutlineCancel} from 'react-icons/md'


//styled components
import { Expenseform, Container, ExpenseLabel, ExpenseInput, ExpenseBTN, ExpenseSelect, Expenseoption, CancelIcon } from './ExpenseStyledCMPS'

function ExpenseForm(props) {

    const userInputMoney = useRef();
    const userInputDescrip = useRef();
    const userInputSelect = useRef();



    const handleFormSubmit = (event) => {
        event.preventDefault();

        const enteredMoney = userInputMoney.current.value;
        const enteredDescrip = userInputDescrip.current.value;
        const enteredSelect = userInputSelect.current.value;

        const userData = {
            id: Math.random().toString() ,
            money:enteredMoney,
            description:enteredDescrip,
            select:enteredSelect
        }

        console.log(userData)
        props.details(userData);

    } 
  return (
    <Container>
        <Expenseform onSubmit={handleFormSubmit}>
        <CancelIcon><MdOutlineCancel style={{width:'30px', height:'30px', color:'white', backgroundColor:'red',borderRadius:'5px'}}
        onClick={props.HidingForm}
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
                <Expenseoption>Charity</Expenseoption>
            </ExpenseSelect><br/>
            <ExpenseBTN  type='submit'>ADD</ExpenseBTN>
        </Expenseform>
    </Container>
  )
}

export default ExpenseForm