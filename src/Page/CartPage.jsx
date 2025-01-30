import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  DecreaseQuantity,
  RemoveFromCart,
} from "../Store/CartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryCharge = 5.0;
  const total = subtotal + deliveryCharge;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 space-y-6">
          <div className="text-6xl text-gray-300 mb-4">🛒</div>
          <h2 className="text-2xl text-gray-600 font-medium">
            Your cart is empty
          </h2>
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Explore Our Menu
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 flex gap-4 items-center border-2  hover:shadow-md transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                />

                <div className="flex justify-between  w-full">
                  <div className="">
                    <h3 className="text-xl font-semibold text-gray-800 mb-5">
                      {item.name}
                    </h3>
                    <p className="text-lg font-medium text-orange-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between items-center text-center my-auto">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2">
                        <button
                          onClick={() => dispatch(DecreaseQuantity(item))}
                          className="text-gray-600 hover:text-orange-500 text-lg w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(AddToCart(item))}
                          className="text-gray-600 hover:text-orange-500 text-lg w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => dispatch(RemoveFromCart(item))}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 h-fit border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal ({cartItems.length} items)
                </span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Charges</span>
                <span className="font-medium">
                  ${deliveryCharge.toFixed(2)}
                </span>
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-800">
                  Total
                </span>
                <span className="text-lg font-semibold text-gray-800">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/cart/payment"
                className="w-full bg-orange-500 text-white py-3.5 rounded-lg hover:bg-orange-600 transition-colors mt-6 font-medium text-center block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
