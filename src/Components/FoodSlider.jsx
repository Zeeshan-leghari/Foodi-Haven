import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const foodItems = [
  {
    id: 1,
    name: "Italian Pizza",
    description: "Wood-fired Neapolitan pizza",
    price: 16.99,
    image:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800",
  },
  {
    id: 2,
    name: "Sushi Platter",
    description: "Fresh nigiri & maki selection",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800",
  },
  {
    id: 3,
    name: "Grilled Steak",
    description: "Prime ribeye with herbs",
    price: 32.99,
    image:
      "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800",
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    description: "Creamy Roman-style pasta",
    price: 18.99,
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800",
  },
  {
    id: 5,
    name: "Gourmet Burger",
    description: "Angus beef with secret sauce",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800&q=70",
  },
  {
    id: 6,
    name: "Caesar Salad",
    description: "Fresh romaine with parmesan",
    price: 12.99,
    image:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800&q=75",
  },
  {
    id: 7,
    name: "Mexican Tacos",
    description: "Authentic street-style tacos",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800",
  },
  {
    id: 8,
    name: "Ramen Bowl",
    description: "Rich tonkotsu broth",
    price: 15.99,
    image:
      "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800&q=80",
  },
  {
    id: 9,
    name: "Chicken Curry",
    description: "Spicy Indian masala",
    price: 13.99,
    image:
      "https://images.pexels.com/photos/6745746/pexels-photo-6745746.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800",
  },
  {
    id: 10,
    name: "Chocolate Dessert",
    description: "Decadent triple-layer cake",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=500&w=800&q=75",
  },
];

const FoodSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % foodItems.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="relative h-[590px] overflow-hidden my-2 mx-auto max-w-12xl rounded-xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {foodItems.map((item) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end pb-12 px-8">
              <div className="text-white max-w-2xl">
                <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
                  {item.name}
                </h2>
                <p className="text-lg mb-6 font-medium text-gray-200">
                  {item.description}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer transform hover:scale-[1.01] shadow-xl ">
                  Order Now - ${item.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? foodItems.length - 1 : prev - 1
          )
        }
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % foodItems.length)}
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {foodItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-orange-500"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSlider;
