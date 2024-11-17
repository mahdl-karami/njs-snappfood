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
    <div className={card}>
      <img src={`/images/${id}.jpeg`} alt={name + " image"} />
      <div className={foodDetails}>
        <h3>{name}</h3>
        <div>
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
      <Link href={`/menu/${id}`} className="btn btn-primary">
        See Details
      </Link>
    </div>
  );
};

export default Card;
