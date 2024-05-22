import React from "react";

const OrderHeader = () => {
  return (
    <thead className="text-gray-100">
      <tr>
        <th>מחיר כולל</th>
        <th>כמות</th>
        <th>מספר חומר</th>
        <th>שורה</th>
      </tr>
    </thead>
  );
};

export default OrderHeader;
