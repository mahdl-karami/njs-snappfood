// import styles
import { banner } from "@/styles/Home.module.css";
// import images
import bannerImg from "/public/images/banner.png";
import Image from "next/image";
// import components
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className={banner}>
      <div>
        <h1>SnappFood</h1>
        <h2>Food Delivery and Takeout!</h2>
        <p className="lead">Snappfood is an online food ordering and delivery platform launched by Snapp in 2014. Meals are delivered by couriers using cars, scooters, bikes, or on foot.</p>
        <button className="btn btn-primary">
          <Link href={`/menu`}>See All</Link>
        </button>
      </div>
      <Image src={bannerImg} width={500} height={370} alt="Banner Image" />
    </div>
  );
};

export default HomeBanner;
