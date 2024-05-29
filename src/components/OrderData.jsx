import OrderHeader from "../components/OrderHeader";
import { ORDER_STATUS } from "../constants";
import OrderItemsContainer from "./OrderItems";

const OrderData = ({ orderData, isCreate, setOrderStatus }) => {
  if (orderData !== undefined)
    return (
      <div className="overflow-x-auto w-full text-black px-2">
        <div className="">{orderData.status}</div>
        <table className="table">
          <OrderHeader />
          <OrderItemsContainer
            orderItems={orderData.items}
            isCreate={isCreate}
          />
        </table>
        <div className="py-6 overflow-hidden flex justify-between">
          <div
            className={
              orderData.status === ORDER_STATUS.Issued
                ? "btn btn-disabled"
                : "btn btn-secondary"
            }
            onClick={() => setOrderStatus(ORDER_STATUS.Canceled)}>
            {"מחק הזמנה"}
          </div>
          <div
            className={
              orderData.status === ORDER_STATUS.Canceled
                ? "btn btn-disabled"
                : "btn btn-primary"
            }
            onClick={() => setOrderStatus(ORDER_STATUS.Issued)}>
            {"נפק ליחידה"}
          </div>
        </div>
      </div>
    );
};

export default OrderData;
