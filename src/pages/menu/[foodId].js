import Dollar from "@/icons/Dollar";
import Location from "@/icons/Location";
import styles from "@/styles/DetailsPage.module.css";
import Head from "next/head";

const FoodDetails = ({ params, food }) => {
  const { id, name, price, discount, introduction, details, ingredients, recipe } = food[0];

  return (
    <>
      <Head>
        <title>SnappFood | {name}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.container}>
          <h2 className="title-line">Details</h2>
          <div className={styles.subContainer}>
            <div className={styles.banner}>
              <img src={`/images/${id}.jpeg`} alt={name} />
              <div>
                <h3>{name}</h3>
                <span className={styles.location}>
                  <Location />
                  {details[0].Cuisine}
                </span>
                <span className={styles.price}>
                  <Dollar />
                  {discount ? (price * (100 - discount)) / 100 : price}$
                </span>
                {discount ? <span className={styles.discount}>{discount}$ OFF</span> : null}
              </div>
            </div>
            <div className={styles.introduction}>
              <p className="lead">{introduction}</p>
            </div>
            <div className={styles.details}>
              <h4 className="title">Details</h4>
              <ul>
                {details.map((detail, index) => (
                  <li key={index}>
                    <p>{Object.keys(detail)[0]}: </p>
                    <span>{Object.values(detail)[0]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.details}>
              <h4 className="title">Ingredients</h4>
              <ul>
                {ingredients.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.recipe}>
              <h4 className="title">Recipe</h4>
              {recipe.map((item, index) => (
                <div key={index} className={index % 2 ? styles.odd : styles.even}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
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
