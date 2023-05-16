import ExpenseDate from "./ExpenseDate";
import './ExpenseLineItem.css';

function ExpenseLineItem(props) {
   return (
      <div className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price" >${props.amount}</div>
         </div>
      </div >
   );
}
export default ExpenseLineItem;