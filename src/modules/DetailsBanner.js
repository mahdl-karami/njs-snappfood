// import styles
import { banner, foodDiscount } from "@/styles/DetailsPage.module.css";
// import components
import Location from "@/icons/Location";
import Dollar from "@/icons/Dollar";

const DetailsBanner = ({ food }) => {
  const { id, name, price, discount, introduction, details } = food[0];
  return (
    <div>
      <div className={banner}>
        <img src={`/images/${id}.jpeg`} alt={name} />
        <div>
          <h3>{name}</h3>
          <span className="lead">
            <Location />
            {details[0].Cuisine}
          </span>
          <span>
            <Dollar />
            {discount ? (price * (100 - discount)) / 100 : price}$
          </span>
          {discount ? <span className={foodDiscount}>{discount}% OFF</span> : <div></div>}
        </div>
      </div>
      <p className="lead" style={{ margin: "3rem 0" }}>
        {introduction}
      </p>
    </div>
  );
};

export default DetailsBanner;
