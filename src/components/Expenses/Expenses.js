import React , {useState} from 'react'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem'
import './Expenses.css';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler =(selectedYear)=>{
        setFilterYear(selectedYear);
    }


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((item) => (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            ))}
        </Card>
    )
}

export default Expenses;