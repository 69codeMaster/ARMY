export const ORDER_STATUS = {
  Created: Symbol("created"),
  Canceled: Symbol("canceled"),
  Issued: Symbol("Issued"),
};

export const PATHS = {
  Home: "/",
  MaterialOverview: "/material:id",
  UnitOverview: "/unit:id",
  OrderOverview: "/order/overview:id",
  CreateOrder: "/order/create",
  OrderReport: "/order/report",
  StockManagement: "stock/manage",
};
