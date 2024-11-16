import Card from "@/components/Card";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Menu.module.css";
const { menu } = styles;

const Menu = ({ data }) => {
  return (
    <>
      {/*//? Page Head */}
      <Head>
        <title>SnappFood | Menu</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      {/* //! Menu */}
      <div>
        <h2 className="title-line">Menu</h2>
        <div className={menu}>
          {data.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await fetch(`http://localhost:3003/data`).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
}

export default Menu;
