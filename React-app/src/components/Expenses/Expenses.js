import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props) => {

    return (
        <Card className="expenses">
        <ExpenseItem 
            title={props.ExpData[0].title} 
            amount={props.ExpData[0].amount} 
            date={props.ExpData[0].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.ExpData[1].title} 
            amount={props.ExpData[1].amount} 
            date={props.ExpData[1].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.ExpData[2].title} 
            amount={props.ExpData[2].amount} 
            date={props.ExpData[2].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.ExpData[3].title} 
            amount={props.ExpData[3].amount} 
            date={props.ExpData[3].date}
        ></ExpenseItem>
      </Card>
    );
}

export default Expenses;