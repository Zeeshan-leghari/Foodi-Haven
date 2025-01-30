import { useState } from "react";
import FoodData from "../Data/FoodData";
import FoodCard from "../Components/FoodCard";
import { useSelector } from "react-redux";

const CategoryMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const inputValue = useSelector((state) => state.search?.search || "");

  const categoryList = [
    "All",
    ...new Set(FoodData.map((item) => item.category)),
  ];

  const filteredFood = FoodData.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-20 pt-24">
      <div className="mb-8 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-slide-up">
          Explore Our <span className="text-orange-500">Delicious</span> Menu
        </h2>
        <p className="text-gray-600 text-lg animate-slide-up delay-100 max-w-lg mx-auto">
          Discover a world of flavors crafted with passion and fresh ingredients. Indulge in the finest dishes from every corner of the world.
        </p>
      </div>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFood.length > 0 ? (
          filteredFood.map((item, index) => (
            <div
              key={index}
              className="relative transition-transform duration-300"
            >
              <FoodCard
                item={item}
                className="hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-xl font-semibold col-span-full mt-8">
            <span className="text-orange-500">No matching results found</span>. Please try a different search.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
