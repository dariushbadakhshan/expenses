import { ReactNode } from "react";
//css import
import classes from "./Card.module.css";

const Card: React.FC<{ children: ReactNode; className: string }> = ({
  children,
  className,
}) => {
  const cardClass = `${classes.card} ${className} `;
  return <div className={cardClass}>{children}</div>;
};
export default Card;
