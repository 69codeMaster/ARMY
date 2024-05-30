import { fetchOrderData } from "../api/orders";
import OrderTableHeader from "./OrderTableHeader";
import OrderItemsContainer from "./OrderItems";
import OrderStatusButtons from "./OrderStatusButtons";
import { updateOrderStatus } from "../api/orders";
import OrderHeader from "./OrderHeader";

const OrderData = ({ orderData, isCreate, setOrderStatus }) => {
  if (orderData !== undefined)
    return (
      <div className="overflow-x-auto max-h-[70%] w-full text-black px-2">
        <OrderHeader orderHeaderData={orderData} />
        <table className="table">
          <OrderTableHeader />
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
