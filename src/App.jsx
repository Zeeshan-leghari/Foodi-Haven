import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50">
        <Navbar/>
        <div className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8">
          <Outlet/>
        </div>
      </div>
    </Provider>
  );
}

export default App;