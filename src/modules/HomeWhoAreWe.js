// import styles
import { whoAreWe } from "@/styles/Home.module.css";
// import components
import Apple from "@/icons/Apple";
import SpaceX from "@/icons/SpaceX";
import Binance from "@/icons/Binance";
import Tesla from "@/icons/Tesla";

const HomeWhoAreWe = () => {
  return (
    <>
      <h2 className="title">Who Are We ?</h2>
      <div className={whoAreWe}>
        <p className="lead">BotoFood company was founded in 2009 by Garrett Camp and Travis Kalanick.The company began food delivery in August 2014 with the launch of the UberFRESH service in Santa Monica, California. In 2015, the platform was renamed to UberEATS and the ordering software was released as its own application, separate from the app for Uber rides.In 2016, it commenced operations in both London and Paris. </p>
        <div>
          <Apple />
          <SpaceX />
          <Binance />
          <Tesla />
        </div>
      </div>
    </>
  );
};

export default HomeWhoAreWe;
