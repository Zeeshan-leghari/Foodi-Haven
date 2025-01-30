import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle redirects

const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading screen
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setIsLoading(true); // Show loading screen

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error.message);
      setIsProcessing(false);
      setIsLoading(false); // Hide loading screen if error occurs
    } else {
      console.log("Payment Method:", paymentMethod);

      // Simulate a delay of 3 seconds before redirect
       // 3 seconds delay
    }
  };

  if (isLoading) {

    setTimeout(() => {
        setIsProcessing(false);
        setIsLoading(false); // Hide loading screen after 3 seconds
        navigate("/"); // Redirect to home page
      }, 2000);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Processing your payment...</div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-5 p-6 bg-white shadow-sm rounded">
      <h2 className="text-2xl font-semibold text-center mb-4">Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="card-element" className="block text-sm text-gray-600">
            Card Details
          </label>
          <CardElement
            id="card-element"
            className="border border-gray-300 p-3 rounded mt-2 w-full"
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className={`w-full py-2 rounded mt-4 text-white ${
            isProcessing ? "bg-gray-400" : "bg-blue-500"
          } transition-colors`}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
