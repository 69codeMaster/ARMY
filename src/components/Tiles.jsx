import { MdOutlineInventory as StockIcon } from "react-icons/md";
import { TbReportMoney as ReportIcon } from "react-icons/tb";
import { MdAddShoppingCart as OrderCreateIcon } from "react-icons/md";
import { SlEyeglass as OrderOverviewIcon } from "react-icons/sl";
import LinkTile from "./UI/LinkTile";
import { PATHS } from "../constants";

const Tiles = () => {
  return (
    <div className="p-4 grid grid-rows-2 grid-cols-2 gap-4">
      <LinkTile
        text={"ניהול  מלאי"}
        to={PATHS.StockManagement}
        icon={<StockIcon />}
      />
      <LinkTile
        text={"יצירת הזמנה"}
        to={PATHS.CreateOrder}
        icon={<OrderCreateIcon />}
      />
      <LinkTile
        text={"דוח הזמנות"}
        to={PATHS.OrderReport}
        icon={<ReportIcon />}
      />
      <LinkTile
        text={"צפייה בהזמנה"}
        to={PATHS.OrderOverview}
        icon={<OrderOverviewIcon />}
      />
    </div>
  );
};

export default Tiles;
