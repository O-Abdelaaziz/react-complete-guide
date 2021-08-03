import React from 'react'
import './ExpenseItem.css';

export const ExpenseItem = (props) => {
    
    const day=props.date.toLocaleString('en-US',{day:'numeric'});
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const year=props.date.toLocaleString('en-US',{year:'numeric'});
    
    return (
        <div className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
