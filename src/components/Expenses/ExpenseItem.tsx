// components import
import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";
//css import
import classes from "./ExpensesItem.module.css";

const ExpenseItem: React.FC<{ title: string; amount: number; date: Date }> = (
  props
) => {
  return (
    <li>
      <Card className={classes.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={classes.expenseItemDescription}>
          <h2>{props.title} </h2>
          <div className={classes.expenseItemPrice}>$ {props.amount} </div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
