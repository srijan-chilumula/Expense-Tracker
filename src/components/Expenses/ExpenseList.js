import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
const ExpenseList=props=>
{
    
    if(props.items.length===0)
    {
        return<h2 className='heading'>No Rows Available</h2>;
    }  
    return(
        <ul className='expenses'>
        {props.items.map(expense=>
        (<ExpenseItem 
        key={expense.id}
        title={expense.title} date={expense.date} amount={expense.amount}/>))}
        </ul>
    ) 
}
export default ExpenseList;