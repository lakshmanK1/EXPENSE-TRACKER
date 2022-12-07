
import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'

function FileDownloader() {
    const expenseList = useSelector(state => state.Expense.expenseInitialState);

    const Anchor = styled.a`text-decoration:none; font-size:16px; color:#2192ff; border:2px solid #2192ff;
    padding:8px; font-weight:500;
    :hover{
        background-color:#2192ff;
        color:white;
    }`;

    const title = ['Description','Category', 'Price'];
    const data = [title];

    expenseList.forEach((item) => {
        data.push([item.description, item.category, item.price]);
      });

    const creatingCSV = data.map((row) => row.join(',')).join('\n');
    const blob = new Blob([creatingCSV]);

  return (
    <div>
        <Anchor href={URL.createObjectURL(blob)} download='expenses.csv'>
        Download Expenses
        </Anchor>
    </div>
  )
}

export default FileDownloader