import { useState } from "react"
import { FiPlus, FiRefreshCw } from "react-icons/fi"
import ProductTable from "./ProductTable"
import AddForm from "./AddForm"

const StockManagement = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    category: "All Categories",
    product: "All Products",
    sortBy: "Latest",
    color: "All Colors",
    thickness: "All Thickness",
    diameter: "All Diameters"
  })

  const handleRefresh = () => {
    setSearchTerm("")
    setFilters({
      category: "All Categories",
      product: "All Products",
      sortBy: "Latest",
      color: "All Colors",
      thickness: "All Thickness",
      diameter: "All Diameters"
    })
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const dropdownOptions = {
    category: ["All Categories", "Level 1 Cat", "Level 2 Cat", "Level 3 Cat"],
    product: ["All Products", "Green Sandalwood Soap", "Red Sandalwood Soap", "Blue Sandalwood Soap"],
    sortBy: ["Latest", "Oldest", "Price: Low to High", "Price: High to Low"],
    color: ["All Colors", "Green", "Red", "Blue", "Orange"],
    thickness: ["All Thickness", "Thin", "Medium", "Thick"],
    diameter: ["All Diameters", "Small", "Medium", "Large"]
  }

  return (
    <div className="px-4 sm:px-6 py-4 bg-gray-50">
      {showAddProduct && <AddForm onClose={() => setShowAddProduct(false)} />}

      {/* Search and Add Product */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <div className="flex flex-1 items-center gap-2 w-full sm:w-auto">
          <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">Products</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-green-500 focus:ring-2"
          />
        </div>

        <button
          onClick={() => setShowAddProduct(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
            showAddProduct
              ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow"
              : "bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90"
          } w-full sm:w-auto justify-center`}
        >
          <FiPlus className="text-base" /> Add Product
        </button>
      </div>

      {/* Main Filters - Category, Product, Sort By */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {Object.entries({ 
          category: 'Category', 
          product: 'Product', 
          sortBy: 'Sort By' 
        }).map(([key, label]) => (
          <FilterDropdown
            key={key}
            label={label}
            value={filters[key]}
            options={dropdownOptions[key]}
            onChange={(value) => handleFilterChange(key, value)}
          />
        ))}
      </div>

      {/* Secondary Filters - Color, Thickness, Diameter with Refresh */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-300 rounded-md p-4">
          {Object.entries({ 
            color: 'Color', 
            thickness: 'Thickness', 
            diameter: 'Diameter' 
          }).map(([key, label]) => (
            <FilterDropdown
              key={key}
              label={label}
              value={filters[key]}
              options={dropdownOptions[key]}
              onChange={(value) => handleFilterChange(key, value)}
              compact={true}
            />
          ))}
        </div>

        <div className="flex items-center justify-end md:justify-start">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 border border-green-600 text-black text-sm px-4 py-2 rounded-md hover:bg-green-50 whitespace-nowrap h-[42px]"
          >
            <span className="bg-green-600 text-white rounded-full p-1">
              <FiRefreshCw className="w-4 h-4" />
            </span>
            Refresh
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-x-auto">
        <ProductTable
          searchTerm={searchTerm}
          selectedCategory={filters.category}
          selectedProduct={filters.product}
          sortBy={filters.sortBy}
          selectedColor={filters.color}
          selectedThickness={filters.thickness}
          selectedDiameter={filters.diameter}
        />
      </div>
    </div>
  )
}

const FilterDropdown = ({ label, value, options, onChange, compact = false }) => (
  <div className={`flex flex-col ${compact ? 'min-w-0' : ''}`}>
    <label className="text-sm text-gray-600 mb-1 whitespace-nowrap">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-green-500 focus:ring-2 ${compact ? 'truncate' : ''}`}
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
)

export default StockManagement