import ExpenseList from './ExpenseList';
import Card from '../UI/Card.js';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import React,{useState} from 'react';
import ExpenseChart from './ExpenseChart';
function Expenses(props)
{
    const [filteredYear,setYear]=useState('2020');
    const keepOver=(selectedYear)=>{setYear(selectedYear)};
    console.log(props.items);
    const filterExpense=props.items.filter(expense=>{return expense.date.getFullYear().toString()===filteredYear});
    
    return(
        <Card className="expenses">
        <ExpenseFilter select={filteredYear} onChange={keepOver}/>
        <ExpenseChart expense={filterExpense}/>
        <ExpenseList items={filterExpense}/>
        
        </Card>
    )
}
export default Expenses;