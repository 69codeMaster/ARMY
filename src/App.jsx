import { Routes, Route, Navigate } from "react-router-dom";
import { PATHS } from "./constants.js";
import Home from "./pages/Home.jsx";
import OrderReport from "./pages/OrderReport.jsx";
import CreateOrder from "./pages/CreateOrder.jsx";
import StockManagement from "./pages/StockManagement.jsx";
import UnitOverview from "./pages/UnitOverview.jsx";
import MaterialOverview from "./pages/MaterialOverview.jsx";
import OrderOverview from "./pages/OrderOverview.jsx";
import Popup from "./components/Popup.jsx";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path={PATHS.Home} element={<Home />} />
        <Route path={PATHS.CreateOrder} element={<CreateOrder />} />
        <Route path={PATHS.OrderReport} element={<OrderReport />} />
        <Route path={PATHS.StockManagement} element={<StockManagement />} />
        <Route path={PATHS.UnitOverview} element={<UnitOverview />} />
        <Route path={PATHS.MaterialOverview} element={<MaterialOverview />} />
        <Route path={PATHS.OrderOverview} element={<OrderOverview />} />
      </Routes>
    </div>
  );
}
export default App;
