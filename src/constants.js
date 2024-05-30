export const ORDER_STATUS = {
  Created: "created",
  Canceled: "canceled",
  Issued: "Issued",
};

export const PATHS = {
  Home: "/",
  MaterialOverview: "/material",
  UnitOverview: "/unit",
  OrderOverview: "/order/overview",
  CreateOrder: "/order/create",
  OrderReport: "/order/report",
  StockManagement: "stock/manage",
};

export const LOCAL_STORAGE = {
  Materials: "materials",
  Orders: "orders",
};

export const STATUS_TRANSLATIONS = {
  [ORDER_STATUS.Canceled]: "בוטלה",
  [ORDER_STATUS.Created]: "נוצרה",
  [ORDER_STATUS.Issued]: "נופקה",
};

// export const PATHS = {
//   Home: "/",
//   MaterialOverview: "/material/:id",
//   UnitOverview: "/unit/:id",
//   OrderOverview: "/order/overview/:id",
//   CreateOrder: "/order/create",
//   OrderReport: "/order/report",
//   StockManagement: "stock/manage",
// };
