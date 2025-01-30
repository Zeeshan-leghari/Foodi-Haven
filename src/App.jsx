import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./Components/Navbar";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-stripe-public-key"); 

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50">
        <Navbar />
        <div className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8">
          <Elements stripe={stripePromise}>
            <Outlet />
          </Elements>
        </div>
      </div>
    </Provider>
  );
}

export default App;
