import { orders } from "../../dummyData";
import { ORDER_STATUS } from "../constants";
import { fetchMaterial, reclaimStockFromCanceledOrder } from "./material";
import { LOCAL_STORAGE } from "../constants";
import { updateLocalStorage } from "../utils/localStorage";

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
  updateLocalStorage(LOCAL_STORAGE.Orders, JSON.stringify(orders));
};

export const getNewOrderNumber = () => orders.length + 1;

export const fetchOrderData = (orderNumber) => {
  return orders.find((order) => order.order_number === orderNumber);
};
export const updateOrderStatus = (updatedOrder) => {
  let order = fetchOrderData(updatedOrder?.order_number);
  if (updatedOrder !== undefined && order !== undefined) {
    if (
      order.status !== updatedOrder.status &&
      updatedOrder.status === ORDER_STATUS.Canceled
    ) {
      reclaimStockFromCanceledOrder(
        updatedOrder.items.map((item) => {
          return {
            material: item.material,
            amount: item.quantity,
          };
        })
      );
    }

    order.status = updatedOrder.status;
    updateLocalStorage(LOCAL_STORAGE.Orders, JSON.stringify(orders));
  }
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
