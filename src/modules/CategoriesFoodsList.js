// import styles
import { menu } from "@/styles/Menu.module.css";
import { card } from "@/styles/Card.module.css";
// import components
import Card from "@/components/Card";

const CategoriesFoodsList = ({ foods, queries }) => {
  const { difficulty, coockingTime } = queries;
  //! calculate cooking time
  function calcCookingTime(time) {
    return time.split(" ")[0] < 30 ? "less" : "more";
  }
  //! filtering foods by queries
  var filteredFoods = foods;
  if (difficulty) {
    filteredFoods = filteredFoods.filter((food) => food.details[2].Difficulty.toLowerCase() == difficulty.toLowerCase());
  }
  if (coockingTime) {
    filteredFoods = filteredFoods.filter((food) => calcCookingTime(food.details[4]["Cooking Time"]) == coockingTime.toLowerCase());
  }
  return (
    <div className={menu}>
      {filteredFoods.map((item) => (
        <div className={card} key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesFoodsList;
