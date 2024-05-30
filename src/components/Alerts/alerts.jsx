import Swal from "sweetalert2";

export const NoRows = Swal.mixin({
  icon: "error",
  title: "שגיאה ביצירת הזמנה",
  text: "הינך חייב להזין שורות בהזמנה",
});

export const OrderCreated = Swal.mixin({
  icon: "success",
  title: "!תתחדש",
  text: "הזמנה נוצרה בהצלחה",
});

export const MaterialUpdated = Swal.mixin({
  icon: "success",
  title: "!התעדכנו",
  text: "עדכון נתוני המלאי בוצע בהצלחה",
});

export const BadMaterial = ({ lines }) =>
  Swal.mixin({
    icon: "error",
    title: "כמה חומרים לא קיימים",
    text,
  });

export const SameStatus = (order, status) =>
  Swal.mixin({
    icon: "warning",
    title: "סטטוס לא השתנה",
    text: `הזמנה ${order} כבר בסטטוס ${status}`,
  });

export const NotEnoughInStock = ({ lines }) =>
  Swal.mixin({
    icon: "error",
    title: "כמה חומרים לא קיימים",
    text,
  });
