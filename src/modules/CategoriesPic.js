// import images
import pic from "/public/images/search.png";
import Image from "next/image";
// import styles
import { img } from "@/styles/Categories.module.css";

const CategoriesPic = () => {
  return (
    <div className={img}>
      <Image src={pic} width={"100%"} height={"100%"} alt="Search Image" />
    </div>
  );
};

export default CategoriesPic;
