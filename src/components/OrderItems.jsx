import OrderItem from "./OrderItem";

const OrderItems = ({ orderItems, setOrderItems, isCreate }) => {
  return (
    <tbody>
      {orderItems?.map((item) => (
        <OrderItem
          key={item.item_number}
          orderItem={item}
          setOrderItems={setOrderItems}
          isCreate={isCreate}
        />
      ))}
    </tbody>
  );
};

export default OrderItems;
