import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import Link from "../components/UI/Link";
import { PATHS } from "../constants";

function Home() {
  return (
    <Card>
      <h1 className="text-gray-300 text-5xl text-center font-semibold p-4">
        {" ברוכה הבאה "}
        <span className="text-blue-600 text-center">{" לדרישות והקצאות "}</span>
      </h1>
      <div className="form-control">
        <Link text={"ניהול  מלאי"} to={PATHS.StockManagement} />
        <Link text={"יצירת הזמנה"} to={PATHS.CreateOrder} />
        <Link text={"דוח הזמנות"} to={PATHS.OrderReport} />
      </div>
    </Card>
  );
}

export default Home;
