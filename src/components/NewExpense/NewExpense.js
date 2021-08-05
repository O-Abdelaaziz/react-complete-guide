import React ,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';
import faker from 'faker';
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:faker.datatype.number
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                    />
            )}
        </div>
    )
}

export default NewExpense;
