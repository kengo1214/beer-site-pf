import styles from "./MainHeader.module.scss";
import Link from "next/link";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function MainHeader() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Scroll
          to="top"
          smooth={true}
          duration={800}
          className={styles.link}
          offset={-100}
        >
          <h1>No Beer No Life Tokyo</h1>
        </Scroll>
      </div>

      <nav>
        <ul>
          <li>
            <Scroll
              to="top"
              smooth={true}
              duration={800}
              className={styles.link}
              offset={-100}
            >
              Home
            </Scroll>
          </li>

          <li>
            <Link href="/menu/all-menu">
              <div className={styles.link}>Menu</div>
            </Link>
          </li>

          <li>
            <Link href="/blog/latest-blog">
              <div className={styles.link}>Blog</div>
            </Link>
          </li>

          <li>
            <Scroll
              to="contact"
              smooth={true}
              duration={800}
              className={styles.link}
              offset={-100}
            >
              Contact
            </Scroll>
          </li>
        </ul>
      </nav>

      {/* ハンバーガーメニュー */}
      <div className={styles.hamburgerButton} onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* ハンバーガーメニュー （モバイルサイズ用）*/}
      <div className={styles.hamburgerButtonMobile} onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Home・Menu・Blog・Contact */}
      <div className={nav ? styles.menuOpen : styles.menuClose}>
        <ul>
          <li onClick={handleNav}>
            <Scroll
              to="top"
              smooth={true}
              duration={800}
              offset={-100}
              onClick={handleNav}
            >
              <h1>Home</h1>
            </Scroll>
          </li>

          <li onClick={handleNav}>
            <Scroll
              to="top"
              smooth={true}
              duration={800}
              offset={-80}
              onClick={handleNav}
            >
              <h1>Home</h1>
            </Scroll>
          </li>

          <li onClick={handleNav}>
            <Link href="/menu/all-menu">
              <h1>Menu</h1>
            </Link>
          </li>

          <li onClick={handleNav}>
            <Link href="/blog/latest-blog">
              <h1>Blog</h1>
            </Link>
          </li>

          <li onClick={handleNav}>
            <Scroll
              to="contact"
              smooth={true}
              duration={800}
              offset={-100}
              onClick={handleNav}
            >
              <h1>Contact</h1>
            </Scroll>
          </li>

          <li onClick={handleNav}>
            <Scroll
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              onClick={handleNav}
            >
              <h1>Contact</h1>
            </Scroll>
          </li>
        </ul>
      </div>
    </header>
  );
}