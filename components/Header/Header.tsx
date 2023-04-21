import styles from "./Header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          <h1>No Beer No Life Tokyo</h1>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
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
            <Link href="/#contact" className={styles.link}>
              Contact
            </Link>
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
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </li>

          <li onClick={handleNav}>
            <Link href="/">
              <h1>Home</h1>
            </Link>
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
            <Link href="/#contact">
              <h1>Contact</h1>
            </Link>
          </li>

          <li onClick={handleNav}>
            <Link href="/#contact">
              <h1>Contact</h1>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
