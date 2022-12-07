import React from "react";
import { useSelector } from "react-redux";


const TotalExpenses = () => {
  const amount = useSelector((state) => state.Expense.totalExpenseAmount);
  const activePremium = useSelector((state) => state.Expense.activePremium);

  return (
    <div>
      <span>TOTAL EXPENSES : </span>
      <span >Rs.{amount}</span>
      {activePremium && <button>Activate Premium</button>}
    </div>
  );
};

export default TotalExpenses;