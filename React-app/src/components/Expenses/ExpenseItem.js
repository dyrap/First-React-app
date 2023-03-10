import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
    let title = props.title;

    // fucntion clickHandler() = {};
    const clickHandler = () => {
        title  = 'Updated!';
    };

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card>
    );
}


export default ExpenseItem;