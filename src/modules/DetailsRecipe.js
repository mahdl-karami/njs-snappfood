// import styles
import { recipeList, odd, even } from "@/styles/DetailsPage.module.css";

const DetailsRecipe = ({ recipe }) => {
  return (
    <>
      <h4 className="title">Recipe</h4>
      <div className={recipeList}>
        {recipe.map((item, index) => (
          <div key={index} className={index % 2 ? `` : even}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsRecipe;
