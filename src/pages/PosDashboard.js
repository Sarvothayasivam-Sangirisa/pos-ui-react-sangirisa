import { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import StockManagement from "../components/StockManagement";


function PosDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("products");

  return (
    <div className="flex h-screen bg-gray-50">
      <Menu
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <StockManagement />
        </main>
      </div>
    </div>
  );
}

export default PosDashboard;
