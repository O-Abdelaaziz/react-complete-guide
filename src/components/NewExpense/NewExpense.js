import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';
import faker from 'faker';
const NewExpense = (props) => {

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:faker.datatype.number
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;
