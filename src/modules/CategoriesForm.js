// import styles
import { searchbox } from "@/styles/Categories.module.css";
import { useRouter } from "next/router";

const CategoriesForm = ({ form, setForm }) => {
  const router = useRouter();
  function submitHandler(ev) {
    ev.preventDefault();
    router.push(`/categories/?difficulty=${form.difficulty}&coockingTime=${form.coockingTime}`);
  }
  function changeHandler(target) {
    const { name, value } = target;
    setForm((prevS) => ({ ...prevS, [name]: value }));
  }
  return (
    <form className={searchbox} onSubmit={(ev) => submitHandler(ev)} onChange={({ target }) => changeHandler(target)}>
      <select className="btn" name="difficulty" value={form.difficulty}>
        <option value="">difficulty</option>
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
      <select className="btn" name="coockingTime" value={form.coockingTime}>
        <option value="">coocking time</option>
        <option value="less">less than 30 min</option>
        <option value="more">more than 30 min</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default CategoriesForm;
