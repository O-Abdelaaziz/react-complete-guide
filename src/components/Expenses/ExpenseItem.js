import React ,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import faker from 'faker';

const ExpenseItem = (props) => {

    //let title=props.title;
    const [title, setTitle] = useState(props.title);


    const clickHandler=()=>{
        //title='Hello from react';
        setTitle(faker.commerce.productName());
        console.log("From clickHandler- title is: ",title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;
