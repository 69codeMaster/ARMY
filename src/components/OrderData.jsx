import OrderHeader from "../components/OrderHeader";
import OrderItemsContainer from "./OrderItems";

const OrderData = ({ orderData, isCreate }) => {
  if (orderData !== undefined)
    return (
      <div className="overflow-x-auto w-full text-black">
        <table className="table">
          <OrderHeader />
          <OrderItemsContainer
            orderItems={orderData.items}
            isCreate={isCreate}
          />
        </table>
      </div>
    );
};

export default OrderData;
