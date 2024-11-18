// import modules
import DocumentHead from "@/modules/DocumentHead";
import DetailsBanner from "@/modules/DetailsBanner";
import DetailsDetails from "@/modules/DetailsDetails";
import DetailsIngredients from "@/modules/DetailsIngredients";
import DetailsRecipe from "@/modules/DetailsRecipe";

const FoodDetails = ({ food }) => {
  const { name, details, ingredients, recipe } = food[0];

  return (
    <>
      <DocumentHead title={`SnappFood | ` + name} />
      <h2 className="title-line">Details</h2>
      <DetailsBanner food={food} />
      <DetailsDetails details={details} />
      <DetailsIngredients ingredients={ingredients} />
      <DetailsRecipe recipe={recipe} />
      <button className="btn btn-primary btn-full" style={{ marginBottom: "100px" }}>
        Add to Cart
      </button>
    </>
  );
};

export async function getStaticProps({ params }) {
  const data = await fetch(`http://localhost:3003/data`).then((res) => res.json());
  const food = await data.filter((item) => item.id == params.foodId);
  return {
    props: {
      params,
      food,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(`http://localhost:3003/data`).then((res) => res.json());
  const paths = data.map((item) => ({
    params: {
      foodId: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default FoodDetails;
