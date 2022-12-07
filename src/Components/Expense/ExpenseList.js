import React from 'react'
import {BiCategory} from 'react-icons/bi'
import {BsChatSquareText} from 'react-icons/bs'
import {TbCurrencyRupee} from 'react-icons/tb'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { ExpenseActions } from '../Store/Redux/Expense-Slice'
import {removeExpenseDetails} from '../Store/Redux/Expense-Actions'
import {toast} from 'react-toastify'

//styles comps
import { LI, ListContainer, ListData, ListDiv, UL, RemoveBTN, EditBTN } from './ExpenseStyledCMPS'
import TotalExpenses from './TotalExpense'
import FileDownloader from './FileDownloader'

function ExpenseList() {

const {expenseInitialState} = useSelector(state => state.Expense);
const totalExpense = useSelector(state => state.Expense.totalExpenseAmount);
const dispatch = useDispatch();


const deleteExpense = (data) => {
  const updatedAmount = totalExpense - Number(data.price);
  dispatch(ExpenseActions.deleteExpense({expenseInitialState:data.id, totalExpenseAmount:updatedAmount}));
  dispatch(removeExpenseDetails(data.id));
  toast.error(`Deleted expense details...`,{
  position:"top-center",
  });
}

  return (
    <ListContainer>
        <ListDiv>
        <TotalExpenses/>
            <UL>
                {expenseInitialState.map((item, index)=>(
                    <LI key={item.id}>{index+1}<ListData><BiCategory style={{marginLeft:'15px',marginRight:'10px',color:'#2192ff'}}/>
                    Category: {item.category}  <BsChatSquareText style={{marginLeft:'10px',marginRight:'10px',color:'#2192ff'}}/>
                    Description: {item.description}  <TbCurrencyRupee style={{marginLeft:'10px',marginRight:'10px',color:'#2192ff'}}/>
                    Price: {item.price}</ListData>
                    <RemoveBTN onClick={()=>deleteExpense(item)}>Delete</RemoveBTN>
                    <Link to={`/UpdateExpenseDetails/${item.id}`}><EditBTN>Edit</EditBTN></Link></LI>
                ))}
            </UL>
            <FileDownloader/>
        </ListDiv>
    </ListContainer>
  )
}

export default ExpenseList