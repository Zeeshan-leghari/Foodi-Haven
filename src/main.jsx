import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CartPage from './page/CartPage';
import Errorpage from './page/Errorpage';
import Home from './Page/Home';
import PaymentPage from './Page/PaymentPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "cart",  
        element: <CartPage />
      }
      ,
      {
        path:"cart/Payment",
        element:<PaymentPage/>
      }
    ]
  },
  {
    path: "*", 
    element: <Errorpage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
