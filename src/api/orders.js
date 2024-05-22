import { orders } from "../../dummyData";
import { ORDER_STATUS } from "../constants";
import { fetchMaterial } from "./material";

export const createOrder = (orderItems) => {
  const order = {
    order_number: `${orders.length + 1}`,
    status: ORDER_STATUS.Created,
    items: orderItems,
  };

  orderItems.forEach(
    (item) => (fetchMaterial(item.material).amountInStock -= item.quantity)
  );
  orders.push(order);
};

export const getNewOrderNumber = () => orders.length + 1;

export const fetchOrderData = (orderNumber) => {
  return orders.find((order) => order.order_number === orderNumber);
};

export const fetchOrdersByParams = (searchParams) => {
  const filteredOrders = [];
  let filteredItems = [];

  orders.forEach((order) => {
    if (
      searchParams.order_number === "" ||
      order.order_number === searchParams.order_number
    ) {
      filteredItems = order.items.filter(
        (item) =>
          (searchParams.material === "") |
          (item.material === searchParams.material)
      );

      if (filteredItems.length !== 0)
        filteredOrders.push({
          ...order,
          items: filteredItems,
        });
    }
  });

  return filteredOrders;
};
