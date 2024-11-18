// import styles
import { list } from "@/styles/DetailsPage.module.css";

const DetailsIngredients = ({ ingredients }) => {
  return (
    <>
      <h3 className="title">Ingredients</h3>
      <ul className={list}>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default DetailsIngredients;
