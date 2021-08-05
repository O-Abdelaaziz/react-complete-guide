import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    let expensesContent=<p className="expenses-list__fallback">No Data Found</p>
    if (props.items.length >0){
        expensesContent=props.items.map((item) => (
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        ));
    }

    return (
        <div>
            <ul className="expenses-list">{expensesContent}</ul>
        </div>
    )
}

export default ExpensesList;
