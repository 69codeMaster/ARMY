import { ORDER_STATUS } from "../constants";
import TruckCheckIcon from "./UI/Icons/TruckCheckIcon";
import TruckCancelIcon from "./UI/Icons/TruckCancelIcon";
import { translateToHebrew } from "../utils/translateStatus";
import { SameStatus } from "./Alerts/alerts";

const OrderStatusButtons = ({ setOrderStatus, orderData }) => {
  const handleClick = (status) => {
    if (status === orderData.status) {
      SameStatus(
        orderData.order_number,
        translateToHebrew(orderData.status)
      ).fire();
      return;
    }
    setOrderStatus(status);
  };
  return (
    <div className="py-6 overflow-hidden flex justify-between">
      <div
        className={
          orderData.status === ORDER_STATUS.Issued
            ? "btn btn-disabled"
            : "btn btn-secondary"
        }
        onClick={() => handleClick(ORDER_STATUS.Canceled)}>
        <TruckCancelIcon />
        {"בטל הזמנה"}
      </div>
      <div
        className={
          orderData.status === ORDER_STATUS.Canceled
            ? "btn btn-disabled"
            : "btn btn-primary"
        }
        onClick={() => handleClick(ORDER_STATUS.Issued)}>
        <TruckCheckIcon />
        {"נפק ליחידה"}
      </div>
    </div>
  );
};

export default OrderStatusButtons;
