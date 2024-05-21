import { DAYS, MONTHS, ORDER_DAYS } from "../../assets/Constants";

import "./FormatDate.css";

type FormatDateProps = {
  date: Date;
};

const FormatDate = ({ date }: FormatDateProps) => {
  return (
    <div className="date">
      <p>Today</p>
      <h2>
        { DAYS[date.getDay()] }, { ORDER_DAYS[date.getDate()] }{" "}
        { MONTHS[date.getMonth()] } { date.getFullYear() }
      </h2>
    </div>
  );
}

export default FormatDate;