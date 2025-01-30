// CategoryMenu.jsx
import { useState } from "react";
import FoodData from "../Data/FoodData";
import FoodCard from "../Components/FoodCard";
const CategoryMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categoryList = ["All", ...new Set(FoodData.map((item) => item.category))];

  const filteredFood = selectedCategory && selectedCategory !== "All" 
    ? FoodData.filter(item => item.category === selectedCategory)
    : FoodData;

  return (
    <div className="container mx-auto px-4 py-20 pt-24"> {/* Added pt-24 for navbar spacing */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-up">
          Explore Our Delicious Menu
        </h2>
        <p className="text-gray-600 text-lg animate-slide-up delay-100">
          Discover a world of flavors crafted with passion and fresh ingredients
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex overflow-x-auto pb-4 mb-8 space-x-4 scrollbar-hide">
        {categoryList.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
              ${
                selectedCategory === category 
                  ? "bg-orange-500 text-white border-orange-500 transform scale-105 shadow-lg"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-orange-50 hover:border-orange-200 hover:scale-105"
              }
              whitespace-nowrap shadow-sm hover:shadow-md`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFood.map((item, index) => (
          <div 
            key={index}
            className="relative transition-transform duration-300"
            style={{ zIndex: 1 }} 
          >
            <FoodCard 
              item={item} 
              className="hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative"
              style={{ zIndex: 2 }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;