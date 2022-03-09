import './ExpenseItem.css';
import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
function ExpenseItem(props) {
  const [title, setTitle]=useState(props.title);
  const clickHandler=()=>
  {
    setTitle("Hare Krishna");
  };
  return (
    <Card className="Item">
     <ExpenseDate date={props.date}/> 
      <div className="Item__Intro">
        <h2>{title}</h2>
        <div className="Item__Price">Rs.{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
