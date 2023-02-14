//css import
import classes from "./ExpenseDate.module.css";

const ExpenseDate: React.FC<{ date: Date }> = ({ date }) => {
  const month = date.toLocaleString("en-us", {
    month: "long",
  });

  const day = date.toLocaleString("en-us", { month: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className={classes.expenseDate}>
      <div className={classes.expenseDateMonth}>{month} </div>
      <div className={classes.expenseDateYear}>{day} </div>
      <div className={classes.expenseDateDay}>{year} </div>
    </div>
  );
};
export default ExpenseDate;
