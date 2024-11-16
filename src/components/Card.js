import Dollar from "@/icons/Dollar";
import Location from "@/icons/Location";
import Link from "next/link";
import styles from "@/styles/Card.module.css";

const Card = ({ item }) => {
  const { id, name, price, details, discount } = item;

  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {discount ? <span className={styles.discount}>{(price * (100 - discount)) / 100}$</span> : <span>{price}$</span>}
        {discount ? <div className={styles.badge}>{discount}%</div> : null}
      </div>
      <Link href={`/menu/${id}`} className="btn btn-primary">
        See Details
      </Link>
    </div>
  );
};

export default Card;

// {
//   "id": "11",
//   "name": "Poutine",
//   "price": 9,
//   "discount": 0,
//   "introduction": "It might not be a looker, but this Québec dish is certainly delicious, and is now not only popular across Canada and the northeast of the US but further afield too. Comprising fluffy-on-the-inside, crunchy-on-the-outside French fries, and thick, rich and meaty gravy, poutine is elevated to a culinary event by the addition of cheese curds. These small, solidified white cheese bites retain some of their shape under the heat of the gravy.",
//   "details": [
//       {
//           "Cuisine": "Canadian"
//       },
//       {
//           "Recipe Type": "Potato"
//       },
//       {
//           "Difficulty": "Easy"
//       },
//       {
//           "Preparation Time": "10 mins"
//       },
//       {
//           "Cooking Time": "25 mins"
//       },
//       {
//           "Serves": "2"
//       }
//   ],
//   "ingredients": [
//       "1 vegetable oil spray",
//       "500 g large white potatoes (such as Maris Piper)",
//       "200 g cheese curds, or buffalo mozzarella",
//       "400 ml gravy, beef or onion, either shop-bought or homemade"
//   ],
//   "recipe": [
//       "Bring a large pot of salted water to the boil and pre-heat the oven to 220°C/430°F/gas mark 7.",
//       "Keeping the skin on, slice the potatoes lengthways into 1cm (0.5in) slices then cut into sticks (chips).",
//       "Cook the chips in the boiling water for 5 minutes then drain. ",
//       "Line a large baking tray with parchment paper and spray with a little light oil spray.",
//       "Place the chips onto the baking tray in a single layer, season and spray all over with the light oil. Cook in the pre-heated oven for 25 minutes giving them a shake halfway through or until golden and crispy. ",
//       "Make sure the gravy is at boiling temperature or piping hot.",
//       "Transfer the chips to a serving dish, break the cheese curds (or mozzarella) into small chunks, place them on the chips and pour over the hot gravy.       "
//   ]
// }
