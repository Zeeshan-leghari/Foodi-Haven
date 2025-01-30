import FoodSlider from "../Components/FoodSlider";
import CategoryMenu from "./CategoryMenu";

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <FoodSlider />  
      <CategoryMenu />
    </div>
  );
}

export default Home;
