
import React, { useEffect, useState } from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import { ExpenseActions } from '../Store/Redux/Expense-Slice'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { ThemeActions } from '../Store/Redux/Theme-Slice'
import classes from "./Theme.module.css";
import {BsSun} from 'react-icons/bs'
import {BsMoonStarsFill} from 'react-icons/bs'



//styled components
import { Expenseform, Container, ExpenseLabel, ExpenseInput, ExpenseBTN, ExpenseSelect, Expenseoption, CancelIcon } from './ExpenseStyledCMPS'


const initialData = {
  description:'',
  price:'',
  category:''
}

function ExpenseForm() {

    const [state, setState] = useState(initialData);

    const {singleExpense} = useSelector(state => state.Expense);

    const changeTheme = useSelector(state => state.Theme.theme);

    const dispatch = useDispatch();

    const {id} = useParams();

    const { category, description, price} = state;

    const navigate = useNavigate();

    useEffect(()=>{
      dispatch(ExpenseActions.getExpense(id));
      setState({...singleExpense});
    },[id, singleExpense]);
  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(!category || !description || !price){
          window.alert("please fill all input fields..");
        }else if(!id){
          dispatch(ExpenseActions.addExpense(state));
          toast.success(`Successfully added expense details...`,{
            position:"top-center",
          });
        } else if(id){
          dispatch(ExpenseActions.updateExpense(state));
          toast(`Updated expense details...`,{
            position:"top-center",
          });
        }
        setTimeout(()=>{
          navigate('/welcomepage');
        },[1000]);
    }

  const handleInputChange = (e) => {
    const {name , value} = e.target;
    setState({...state, [name]:value});
  }

  const handleDroupdownChange  = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]:value});
  }

  const themeChangeHandler = () => {
    dispatch(ThemeActions.Theme());
  };
    
  return (
    <div className={!changeTheme ? classes.auth : classes.darkmode}>
      <div className={classes.theme}>
        {!changeTheme && (
          <BsMoonStarsFill style={{ width:'30px', height:'30px',color:'black'}} onClick={themeChangeHandler}/>
        )}
        {changeTheme && (
          <BsSun style={{ width:'30px', height:'30px',color:'yellow'}} onClick={themeChangeHandler}/>
        )}
      </div>
    <Container>
    {/* <Modal> */}
      <Expenseform onSubmit={handleFormSubmit}
      style={changeTheme ? {backgroundColor:'black'} : {backgroundColor:'white'} }>
        <Link to='/welcomepage'>
        <CancelIcon><MdOutlineCancel style={{width:'30px', height:'30px', color:'white', backgroundColor:'red',borderRadius:'5px'}}
      /></CancelIcon>
        </Link>
     <br/>

          <ExpenseLabel htmlFor='price'>Money spent:</ExpenseLabel>
          <ExpenseInput type='number' name='price' id='price' value={price || ''} onChange={handleInputChange} />

          <ExpenseLabel htmlFor='description'>Description:</ExpenseLabel>
          <ExpenseInput type='text' id='description' name='description' value={description || ''} onChange={handleInputChange} /><br/>

          <ExpenseLabel htmlFor='category' >Category:</ExpenseLabel>
          <ExpenseSelect id='select' name='category' value={category || ''} onChange={handleDroupdownChange} >
              <Expenseoption>-select an Category-</Expenseoption>
              <Expenseoption>Food</Expenseoption>
              <Expenseoption>Groceries</Expenseoption>
              <Expenseoption>clothes</Expenseoption>
              <Expenseoption>Bills</Expenseoption>
              <Expenseoption>Furniture</Expenseoption>
          </ExpenseSelect><br/>
          <ExpenseBTN  type='submit'>{!id ? 'ADD' : 'UPDATE'}</ExpenseBTN>
      </Expenseform>
    {/* </Modal> */}
    </Container>
    </div>
  )
}

export default ExpenseForm