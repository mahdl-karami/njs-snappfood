// import modules
import CategoriesFoodsList from "@/modules/CategoriesFoodsList";
import CategoriesForm from "@/modules/CategoriesForm";
import CategoriesPic from "@/modules/CategoriesPic";
import DocumentHead from "@/modules/DocumentHead";
// import hooks
import { useEffect, useState } from "react";

const Categories = ({ queries, foods }) => {
  const [form, setForm] = useState({
    difficulty: "",
    coockingTime: "",
  });
  //! set form values from queries in first render
  useEffect(() => {
    if (queries.difficulty) {
      setForm((prevS) => ({ ...prevS, ["difficulty"]: queries.difficulty }));
    }
    if (queries.coockingTime) {
      setForm((prevS) => ({ ...prevS, ["coockingTime"]: queries.coockingTime }));
    }
  }, []);
  return (
    <>
      <DocumentHead title="SnappFood | Categories" />
      <h2 className="title-line">Categories</h2>
      <CategoriesForm form={form} setForm={setForm} />
      {queries.difficulty || queries.coockingTime ? <CategoriesFoodsList foods={foods} queries={queries} /> : <CategoriesPic />}
    </>
  );
};

export async function getServerSideProps(context) {
  const foods = await fetch(`${process.env.BASE_URL}/data`).then((res) => res.json());
  return {
    props: {
      queries: context.query,
      foods,
    },
  };
}

export default Categories;
