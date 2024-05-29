import { useEffect } from "react";
import { fetchOrderData } from "../api/orders";
import OrderHeader from "../components/OrderHeader";
import OrderItemsContainer from "./OrderItems";
import OrderStatusButtons from "./OrderStatusButtons";
import { updateOrderStatus } from "../api/orders";

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
        {orderData.items.length ===
          fetchOrderData(orderData.order_number).items.length && (
          <OrderStatusButtons
            orderData={orderData}
            setOrderStatus={(newStatus) => {
              updateOrderStatus({ ...orderData, status: newStatus });
              setOrderStatus(newStatus);
            }}
          />
        )}
      </div>
    );
};

export default OrderData;
