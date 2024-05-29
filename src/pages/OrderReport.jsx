import React, { useState } from "react";
import Card from "../components/UI/Card";
import OrderReportSelection from "../components/OrderReportSelection";
import OrderReportResult from "../components/OrderReportResult";
import { fetchOrderData } from "../api/orders";

function OrderReport() {
  const [orders, setOrders] = useState([]);
  return (
    <Card>
      <h1 className="text-gray-300 text-5xl text-center font-semibold p-4">
        {"דוח הזמנות"}
      </h1>
      <OrderReportSelection setOrders={setOrders} />
      <OrderReportResult
        orders={orders}
        setOrdersStatus={(orderNumber, newStatus) => {
          let orderToUpdate = fetchOrderData(orderNumber);
          orderToUpdate.status = newStatus;
          setOrders(
            orders.map((order) =>
              order.order_number !== orderNumber ? order : orderToUpdate
            )
          );
        }}
      />
    </Card>
  );
}

export default OrderReport;
