import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../Store/CartSlice";
import { FaCartPlus, FaTrash } from "react-icons/fa";
import { Rating } from "@mui/material";

const FoodCard = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isInCart = cart.some((cartItem) => cartItem.id === item.id);

  const handleCartItem = () => {
    isInCart ? dispatch(RemoveFromCart(item)) : dispatch(AddToCart(item));
  };

  return (
    <div className="p-2 w-full group">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden h-full flex flex-col transform group-hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={item.img}
            alt={item.name}
            loading="lazy"
          />

          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 shadow-sm">
            {item.category}
          </div>

          <div className="absolute bottom-3 right-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
            <span className="font-bold text-lg">${item.price?.toFixed(0)}</span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">
            {item.name}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {item.desc}
          </p>

          <div className="mt-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Rating
                value={item.rating}
                precision={0.5}
                readOnly
                size="small"
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#f59e0b",
                  },
                  "& .MuiRating-iconHover": {
                    color: "#f59e0b",
                  },
                }}
              />
              <span className="text-sm text-gray-500 font-medium">
                ({item.rating.toFixed(1)})
              </span>
            </div>
            <button
              onClick={handleCartItem}
              className={`p-2.5 rounded-full transition-all flex items-center justify-center ${
                isInCart
                  ? "bg-red-50 text-red-600 hover:bg-red-100"
                  : "bg-orange-50 text-orange-600 hover:bg-orange-100"
              }`}
              aria-label={isInCart ? "Remove from cart" : "Add to cart"}
            >
              {isInCart ? (
                <FaTrash className="w-5 h-5" />
              ) : (
                <FaCartPlus className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default FoodCard;
