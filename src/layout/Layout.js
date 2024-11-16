// import svg/image
import Image from "next/image";
import snappfoodSvg from "./snappfood.svg";
// import styles
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
const { nav, buttons, footer } = styles;
const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <header>
          <nav className={nav}>
            <Link href={`/`}>
              <Image src={snappfoodSvg} alt="snappfood logo" />
            </Link>
            <ul className={buttons}>
              <li>
                <Link href={`/menu`}>Menu</Link>
              </li>
              <li>
                <Link href={`/categories`}>Categories</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <section className="wrapper">{children}</section>
      <footer className={footer}>
        <div className="wrapper">
          <h4>
            Developed by :{" "}
            <a target="_Blank" href="https://github.com/mahdl-karami">
              mahdl-karami
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Layout;
