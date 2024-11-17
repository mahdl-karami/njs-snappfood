// import modules
import HomeBanner from "@/modules/HomeBanner";
import HomeWhyUs from "@/modules/HomeWhyUs";
import HomeWhoAreWe from "@/modules/HomeWhoAreWe";
import HomeHowToOrder from "@/modules/HomeHowToOrder";
import HomeSiteMap from "@/modules/HomeSiteMap";
import DocumentHead from "@/modules/DocumentHead";

const index = () => {
  return (
    <>
      <DocumentHead title="SnappFood" />
      <HomeBanner />
      <HomeWhyUs />
      <HomeWhoAreWe />
      <HomeHowToOrder />
      <HomeSiteMap />
    </>
  );
};

export default index;
