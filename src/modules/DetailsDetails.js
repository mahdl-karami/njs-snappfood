// import styles
import { list } from "@/styles/DetailsPage.module.css";

const DetailsDetails = ({ details }) => {
  console.log(details);
  return (
    <>
      <h3 className="title">Details</h3>
      <ul className={list}>
        {details.map((detail, index) => (
          <li key={index}>
            {Object.keys(detail)[0]}: <span className="lead">{Object.values(detail)[0]}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DetailsDetails;
