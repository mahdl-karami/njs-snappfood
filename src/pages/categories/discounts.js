// import components
import Card from "@/components/Card";
// import styles
import { menu } from "@/styles/Menu.module.css";
import { card } from "@/styles/Card.module.css";

const Discounts = ({ foods }) => {
  const foodsWithDiscount = foods.filter((food) => food.discount);
  return (
    <div className={menu}>
      {foodsWithDiscount.map((item) => (
        <div className={card} key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const foods = await fetch(`${process.env.BASE_URL}/data`).then((res) => res.json());
  return {
    props: {
      foods,
    },
  };
}

export default Discounts;
