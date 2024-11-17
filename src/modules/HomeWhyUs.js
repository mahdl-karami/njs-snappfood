// import styles
import { whyUs } from "@/styles/Home.module.css";
// import components
import Fast from "@/icons/Fast";
import Food from "@/icons/Food";
import Choice from "@/icons/Choice";
import Clock from "@/icons/Clock";

const HomeWhyUs = () => {
  return (
    <>
      <h2 className="title">Why Us ?</h2>
      <div className={whyUs}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurant</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24/7</p>
        </div>
      </div>
    </>
  );
};

export default HomeWhyUs;
