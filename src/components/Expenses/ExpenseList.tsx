// components import
import ExpenseItem from "./ExpenseItem";
//css import
import classes from "./ExpensesList.module.css";

const ExpenseList: React.FC<{
  items: { id: string; date: Date; title: string; amount: number }[];
}> = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className={classes.expensesListFallback}> Found no expenses.</h2>
    );
  }
  const printExpenses = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));
  return <ul className={classes.expensesList}>{printExpenses}</ul>;
};
export default ExpenseList;
