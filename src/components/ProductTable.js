import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import producticon from "../assets/images/p1.png";

const ProductTable = ({
  searchTerm,
  selectedCategory,
  selectedProduct,
  selectedColor,
  selectedThickness,
  selectedDiameter,
}) => {
  const [products] = useState([
    {
      id: 1,
      name: "Green Sandalwood Soap",
      code: "-",
      barcode: "bt0055478",
      category: "Level 1 Cat",
      tax: "CST / HST",
      price: 125.25,
      store: "200 In Stock",
      warehouse: "350 In Stock",
      color: "Green",
      thickness: "Medium",
      diameter: "Medium",
    },
    {
      id: 2,
      name: "Green Sandalwood Soap",
      code: "-",
      barcode: "bt0055478",
      category: "Level 1 Cat",
      tax: "CST / HST",
      price: 125.25,
      store: "200 In Stock",
      warehouse: "350 In Stock",
      color: "Green",
      thickness: "Thin",
      diameter: "Small",
    },
    {
      id: 3,
      name: "Red Sandalwood Soap",
      code: "-",
      barcode: "bt0055479",
      category: "Level 2 Cat",
      tax: "HST",
      price: 115.5,
      store: "25 In Stock",
      warehouse: "350 In Stock",
      color: "Orange",
      thickness: "Thick",
      diameter: "Large",
    },
    {
      id: 4,
      name: "Blue Sandalwood Soap",
      code: "-",
      barcode: "bt0055480",
      category: "Level 3 Cat",
      tax: "VAT",
      price: 135.75,
      store: "200 In Stock",
      warehouse: "20 In Stock",
      color: "Blue",
      thickness: "Medium",
      diameter: "Medium",
    },
    {
      id: 5,
      name: "Green Sandalwood Soap",
      code: "1102",
      barcode: "-",
      category: "Level 1 Cat",
      tax: "CST",
      price: 125.25,
      store: "200 In Stock",
      warehouse: "500 In Stock",
      color: "Green",
      thickness: "Medium",
      diameter: "Medium",
    },
    {
      id: 6,
      name: "Green Sandalwood Soap",
      code: "1102",
      barcode: "-",
      category: "Level 1 Cat",
      tax: "CST",
      price: 125.25,
      store: "Not Available",
      warehouse: "350 In Stock",
      color: "Green",
      thickness: "Medium",
      diameter: "Medium",
    },
    {
      id: 7,
      name: "Green Sandalwood Soap",
      code: "-",
      barcode: "bt0055478",
      category: "Level 1 Cat",
      tax: "Not Applied",
      price: 125.25,
      store: "200 In Stock",
      warehouse: "350 In Stock",
      color: "Green",
      thickness: "Medium",
      diameter: "Medium",
    },
    {
      id: 8,
      name: "Green Sandalwood Soap",
      code: "-",
      barcode: "bt0055478",
      category: "Level 1 Cat",
      tax: "Not Applied",
      price: 125.25,
      store: "Not Available",
      warehouse: "Not Available",
      color: "Green",
      thickness: "Medium",
      diameter: "Medium",
    },
    {
      id: 9,
      name: "Green Sandalwood Soap",
      code: "-",
      barcode: "bt0055478",
      category: "Level 1 Cat",
      tax: "Not Applied",
      price: 125.25,
      store: "200 In Stock",
      warehouse: "350 In Stock",
      color: "Green",
      thickness: "Medium",
      diameter: "Medium",
    },
    {
      id: 10,
      name: "Green Sandalwood Soap",
      code: "-",
      barcode: "bt0055478",
      category: "Level 1 Cat",
      tax: "CST / HST / VAT",
      price: 125.25,
      store: "200 In Stock",
      warehouse: "350 In Stock",
      color: "Green",
      thickness: "Medium",
      diameter: "Medium",
    },
  ]);

  const getStockStatusClass = (value) => {
    if (typeof value !== 'string') {
      return "bg-green-100 text-green-700 border border-green-400";
    }
  
    if (value.toLowerCase().includes("not available")) {
      return "bg-red-100 text-red-700 border border-red-400";
    }
  
    const stockMatch = value.match(/\d+/);
    const stock = stockMatch ? parseInt(stockMatch[0]) : 0;
  
    if (stock < 50) {
      return "bg-orange-100 text-orange-700 border border-orange-700";
    }
    return "bg-green-100 text-green-700 border border-green-400";
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.barcode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" || product.category === selectedCategory;

    const matchesProduct =
      selectedProduct === "All Products" || product.name === selectedProduct;

    const matchesColor =
      selectedColor === "All Colors" || product.color === selectedColor;

    const matchesThickness =
      selectedThickness === "All Thickness" || product.thickness === selectedThickness;

    const matchesDiameter =
      selectedDiameter === "All Diameters" || product.diameter === selectedDiameter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesProduct &&
      matchesColor &&
      matchesThickness &&
      matchesDiameter
    );
  });

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-lg p-4 overflow-x-auto">
      <div className="min-w-0">
        {/* Mobile View - Card Layout */}
        <div className="md:hidden space-y-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-3 border border-gray-200 rounded-lg hover:bg-green-50 hover:ring-1 hover:ring-green-400 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={producticon}
                    alt="product"
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                </div>
                <button
                  className="w-7 h-7 flex items-center justify-center text-green-600 border border-green-500 rounded-md hover:bg-green-200 transition-colors"
                  title="Edit"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-xs text-gray-500">Code</p>
                  <p>{product.code}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Price</p>
                  <p>${product.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Store</p>
                  <span
                    className={`text-xs px-2 py-0.5 border rounded-md font-medium ${getStockStatusClass(
                      product.store
                    )}`}
                  >
                    {product.store}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Warehouse</p>
                  <span
                    className={`text-xs px-2 py-0.5 border rounded-md font-medium ${getStockStatusClass(
                      product.warehouse
                    )}`}
                  >
                    {product.warehouse}
                  </span>
                </div>
              </div>
              
              <div className="mt-2 pt-2 border-t border-gray-100 text-xs">
                <p className="truncate"><span className="text-gray-500">Barcode:</span> {product.barcode}</p>
                <p><span className="text-gray-500">Tax:</span> {product.tax}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop View - Table Layout */}
        <table className="hidden md:table w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 text-[11px] uppercase tracking-wide">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Products</th>
              <th className="px-3 py-2 text-left font-medium">Product code</th>
              <th className="px-3 py-2 text-left font-medium">Barcode</th>
              <th className="px-3 py-2 text-left font-medium">Category</th>
              <th className="px-3 py-2 text-left font-medium">Tax</th>
              <th className="px-3 py-2 text-left font-medium">Price</th>
              <th className="px-3 py-2 text-left font-medium">Store</th>
              <th className="px-3 py-2 text-left font-medium">Warehouse</th>
              <th className="px-3 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-green-100 hover:ring-1 hover:ring-green-200 transition-all"
              >
                <td className="px-3 py-2 whitespace-nowrap flex items-center gap-2 max-w-[160px]">
                  <img
                    src={producticon}
                    alt="product"
                    className="w-6 h-6 rounded-full flex-shrink-0"
                  />
                  <span className="truncate">{product.name}</span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{product.code}</td>
                <td className="px-3 py-2 whitespace-nowrap truncate max-w-[150px]">
                  {product.barcode}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{product.category}</td>
                <td className="px-3 py-2 whitespace-nowrap">{product.tax}</td>
                <td className="px-3 py-2 whitespace-nowrap">${product.price.toFixed(2)}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span
                    className={`text-xs px-2 py-0.5 border rounded-md font-medium ${getStockStatusClass(
                      product.store
                    )}`}
                  >
                    {product.store}
                  </span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span
                    className={`text-xs px-2 py-0.5 border rounded-md font-medium ${getStockStatusClass(
                      product.warehouse
                    )}`}
                  >
                    {product.warehouse}
                  </span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <button
                    className="w-7 h-7 flex items-center justify-center text-green-600 border border-green-500 rounded-md hover:bg-green-200 transition-colors"
                    title="Edit"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;