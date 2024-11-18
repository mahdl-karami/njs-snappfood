// import components
import Dollar from "@/icons/Dollar";
import Location from "@/icons/Location";
import Link from "next/link";
// import styles
import styles from "@/styles/Card.module.css";
const { card, foodPrice, foodDetails, foodDiscount, badge } = styles;
const Card = ({ item }) => {
  const { id, name, price, details, discount } = item;

  return (
    <>
      <img src={`/images/${id}.jpeg`} alt={name + " image"} />
      <div className={foodDetails}>
        <h3>{name}</h3>
        <div className="lead">
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={foodPrice}>
        <Dollar />
        {discount ? (
          <span className={foodDiscount}>
            <span style={{ textDecoration: "line-through", color: "#000" }}>{price + ` `}</span>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={badge}>{discount}%</div> : null}
      </div>
      <Link href={`/menu/${id}`} className="btn btn-primary full-width">
        See Details
      </Link>
    </>
  );
};

export default Card;
