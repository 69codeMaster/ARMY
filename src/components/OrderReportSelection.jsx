import { useState } from "react";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { selectOrders } from "../api/orders";
import FormEntry from "../components/UI/Form/Entry";
import { ORDER_STATUS } from "../constants";
import Button from "./UI/Button";
import DropDown from "./UI/Form/DropDown";
import {
  translateToEnglish,
  translateToHebrew,
} from "../utils/translateStatus";

const OrderReportSelection = ({ setOrders }) => {
  const [searchParams, setSearchParams] = useState({
    order_number: "",
    status: "",
    material: "",
  });
  const statusSelectOptions = Object.values(ORDER_STATUS).map((status) =>
    translateToHebrew(status)
  );
  statusSelectOptions.push("הכל");

  const handleChange = (field, value) => {
    setSearchParams((prev) => {
      return { ...prev, [field]: value };
    });
  };
  const handleSearch = () =>
    setOrders(
      selectOrders({
        headerParams: {
          order_number: searchParams.order_number,
          status: translateToEnglish(searchParams.status),
        },
        itemParams: {
          material: searchParams.material,
        },
      })
    );

  return (
    <div className="flex flex-row-reverse gap-2 items-end justify-evenly mb-5">
      <FormEntry
        name={"order_number"}
        onChange={handleChange}
        placeholder={"הזן מספר הזמנה"}
        title={"מספר הזמנה"}
        value={searchParams.order_number}
      />
      <FormEntry
        name={"material"}
        onChange={handleChange}
        placeholder={"הזן מספר חומר"}
        title={"מספר חומר"}
        value={searchParams.material}
      />
      <DropDown
        name={"status"}
        selectOptions={statusSelectOptions}
        placeholder={"בחר סטטוס"}
        value={searchParams.status}
        onSelect={handleChange}
      />
      <div className="self-end ">
        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default OrderReportSelection;
