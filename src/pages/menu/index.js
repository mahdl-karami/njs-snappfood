// import components
import Card from "@/components/Card";
// import modules
import DocumentHead from "@/modules/DocumentHead";
// import styles
import { menu } from "@/styles/Menu.module.css";

const Menu = ({ foods }) => {
  return (
    <>
      <DocumentHead title="SnappFood | Menu" />
      <h2 className="title-line">Menu</h2>
      <div className={menu}>
        {foods.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const foods = await fetch(`http://localhost:3003/data`).then((res) => res.json());
  return {
    props: {
      foods,
    },
  };
}

export default Menu;
