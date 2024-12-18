// import svg/image
import Image from "next/image";
import snappfoodSvg from "/public/snappfood.svg";
// import styles
import styles from "@/styles/Layout.module.css";
const { nav, buttons, footer } = styles;
// import components
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      {/* //! Header */}
      <header>
        <div className="wrapper">
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
        </div>
      </header>
      {/* //! Center */}
      <section className="wrapper">{children}</section>
      {/* //! Footer */}
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
