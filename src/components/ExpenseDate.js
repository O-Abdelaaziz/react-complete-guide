import React from 'react'
import './ExpenseDate.css';

export const ExpenseDate = (props) => {

    const day=props.date.toLocaleString('en-US',{day:'numeric'});
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const year=props.date.toLocaleString('en-US',{year:'numeric'});

    return (
        <div>
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
        </div>
    )
}

export default ExpenseDate;
