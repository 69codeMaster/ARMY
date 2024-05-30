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

export const StockUpdated = Swal.mixin({
  icon: "success",
  title: "!התעדכנו",
  text: "עדכון נתוני המלאי בוצע בהצלחה",
});

export const BadMaterial = (lines) =>
  Swal.mixin({
    icon: "error",
    title: "וודא שהמקטים נכונים",
    text: `שורות ${lines} מכילות חומרים לא קיימים`,
  });

export const SameStatus = (order, status) =>
  Swal.mixin({
    icon: "warning",
    title: "סטטוס לא השתנה",
    text: `הזמנה ${order} כבר בסטטוס ${status}`,
  });

export const NotEnoughInStock = (lines) =>
  Swal.mixin({
    icon: "error",
    title: "...מצטערים לא נשאר",
    text: `אין כמות מספיקה במלאי עבור שורות ${lines}`,
  });

export const NegativeStock = Swal.mixin({
  icon: "error",
  title: "אתה לא יכול להיכנס למינוס",
  text: `כמות במלאי אינה יכולה להיות קטנה מ0`,
});

export const cancelOrder = Swal.mixin({
  icon: "success",
  title: "הזמנה בוטלה בהצלחה",
  text: "לחסוך קצת זה טוב",
});

export const issueOrder = Swal.mixin({
  icon: "success",
  title: "הזמנה נופקה בהצלחה",
  text: "!עשיתי ניפוק",
});

export const materialNotFound = Swal.mixin({
  icon: "warning",
  title: "מקט לא נמצא",
  text: "וודא שהזנת מקט נכון",
});
export const orderNotFound = Swal.mixin({
  icon: "warning",
  title: "הזמנה לא נמצאה",
  text: "וודא שהזנת הזמנה נכונה",
});
