import cn from "classnames";
import s from "./Container.module.scss";

console.log(s);

export const Container = ({ className, children }) => {
  return <div className={cn(s.container, className)}>{children}</div>;
};
