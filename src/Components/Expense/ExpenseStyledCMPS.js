import styled from "styled-components";

export const Expenseform = styled.form`margin: 3rem auto; width:60%;
border-radius: 6px; background-color: white; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
padding: 1rem; text-align: center;`;
export const Container = styled.div``;
export const ExpenseLabel = styled.label`display: block;
color: #2192FF; font-size:22px;
font-weight: 500;
margin-bottom: 0.5rem;  margin:10px;`;
export const ExpenseInput = styled.input`font: inherit;
background-color: white;
color: black;
border-radius: 4px;
border: 2px solid #2192FF;
text-align: left;
padding: 0.25rem;`;
export const ExpenseBTN = styled.button`cursor: pointer; font: inherit; color: white;
background-color: #2192FF; border: 1px solid white; margin:10px; 
border-radius: 4px; padding: 1rem 3rem;`;
export const ExpenseSelect = styled.select`background-color: #abcd; margin:5px;
color: white; padding: 12px; width: 180px; border: none; font-size: 20px;
box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2); -webkit-appearance: button;
appearance: button; outline: none;`;
export const Expenseoption = styled.option`padding: 30px;`;
export const CancelIcon = styled.div`float:right;`;


//Expense List
export const ListContainer = styled.div``;
export const ListDiv = styled.div`margin: 3rem auto; width:60%;
border-radius: 6px; background-color: white; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
padding: 1rem; `;
export const UL = styled.ul`list-style: none;
padding: 1rem;`;
export const LI = styled.li`border: 1px solid #ccc;
margin: 0.5rem 0;
padding: 0.5rem;`;
export const ListData = styled.span``;
export const RemoveBTN = styled.button`cursor: pointer; color: red;
background-color:white; border: 2px solid red; margin:10px; 
border-radius: 4px; padding:5px;`;
export const EditBTN = styled.button`cursor: pointer; color: green;
background-color:white; border: 2px solid green; margin:10px; 
border-radius: 4px; padding:5px;`;