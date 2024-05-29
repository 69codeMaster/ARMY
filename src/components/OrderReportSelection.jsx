import { useState } from "react";
import { CiSearch as SearchIcon } from "react-icons/ci";
import FormEntry from "../components/UI/Form/Entry";
import Button from "./UI/Button";
import { fetchOrdersByParams } from "../api/orders";

const OrderReportSelection = ({ setOrders }) => {
  const [searchParams, setSearchParams] = useState({
    order_number: "",
    material: "",
  });
  const handleChange = (field, value) => {
    setSearchParams((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const handleSearch = () => setOrders(fetchOrdersByParams(searchParams));

  return (
    <div className="flex flex-row-reverse items-center justify-evenly mb-5">
      <FormEntry
        name={"order_number"}
        type={"number"}
        onChange={handleChange}
        placeholder={"הזן מספר הזמנה"}
        title={"מספר הזמנה"}
        value={searchParams.order_number}
      />
      <FormEntry
        name={"material"}
        onChange={handleChange}
        type={"number"}
        placeholder={"הזן מספר חומר"}
        title={"מספר חומר"}
        value={searchParams.material}
      />
      <div className="self-end" onClick={handleSearch}>
        <Button>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default OrderReportSelection;
