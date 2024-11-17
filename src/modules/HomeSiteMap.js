// import styles
import { siteMap } from "@/styles/Home.module.css";
// import components
import Link from "next/link";
// import icons
import { MdRestaurantMenu } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";

const HomeSiteMap = () => {
  return (
    <>
      <h2 className="title">Ready For Order ? </h2>
      <div className={siteMap}>
        <Link href={`/menu`}>
          <button className="btn">
            <MdRestaurantMenu />
            Menu
          </button>
        </Link>
        <Link href={`/categories`}>
          <button className="btn">
            <BiSolidCategory />
            Categories
          </button>
        </Link>
        <Link href={`/categories/all?discount=true`}>
          <button className="btn">
            <RiDiscountPercentFill />
            Discounts
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeSiteMap;
