import ExpenseLineItem from './ExpenseLineItem';
import './Expenses.css';

function Expenses(props) {
   return (
      <div className="expenses">
         <ExpenseLineItem date={props.items[0].date} title={props.items[0].title} amount={props.items[0].amount} />
         <ExpenseLineItem date={props.items[1].date} title={props.items[1].title} amount={props.items[1].amount} />
         <ExpenseLineItem date={props.items[2].date} title={props.items[2].title} amount={props.items[2].amount} />
      </div>
   );
}
export default Expenses;