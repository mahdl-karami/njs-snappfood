// next imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import styles
import styles from "@/styles/Home.module.css";
const { banner, whyUs, whoAreWe, howToOrder, siteMap } = styles;
// import components
import Apple from "@/icons/Apple";
import SpaceX from "@/icons/SpaceX";
import Binance from "@/icons/Binance";
import Tesla from "@/icons/Tesla";
import Fast from "@/icons/Fast";
import Food from "@/icons/Food";
import Choice from "@/icons/Choice";
import Clock from "@/icons/Clock";
// import images
import bannerImg from "/public/images/banner.png";

const index = () => {
  return (
    <>
      {/*//? Page Head */}
      <Head>
        <title>SnappFood</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      {/*//!  Banner */}
      <div className={banner}>
        <div>
          <h1>SnappFood</h1>
          <h2>Food Delivery and Takeout!</h2>
          <p className="lead">Snappfood is an online food ordering and delivery platform launched by Snapp in 2014. Meals are delivered by couriers using cars, scooters, bikes, or on foot.</p>
          <button className="btn btn-primary">
            <Link href={`/category/all`}>See All</Link>
          </button>
        </div>
        <Image src={bannerImg} width={500} height={370} alt="Banner Image" />
      </div>
      {/*//!  Why Us */}
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
      {/*//!  Who Are We */}
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
      {/*//!  How To Order */}
      <h2 className="title">How To Order ? </h2>
      <div className={howToOrder}>
        <ul>
          <li>Sign in (or create an account) and set your delivery address.</li>
          <li>Choose the restaurant you want to order from.</li>
          <li>Select your items and tap “Add to Cart”.</li>
          <li>To place your order, select “View cart” or “Checkout”.</li>
          <li>Review your order and tap “Place Order”...</li>
          <li>Track your order progress.</li>
        </ul>
      </div>
      {/*//!  Site Map */}
      <h2 className="title">Ready For Order ? </h2>
      <div className={siteMap}>
        <button className="btn">Menu</button>
        <button className="btn">Categories</button>
        <button className="btn">Discounts</button>
      </div>
    </>
  );
};

export default index;
