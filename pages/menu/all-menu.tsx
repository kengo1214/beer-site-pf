import styles from "../../styles/all-menu/all-menu.module.scss";
import stylesNav from "../../styles/all-menu/all-menu-nav.module.scss";
import Header from "../../components/Header/Header";
import { Link as Scroll } from "react-scroll";

export default function AllMenu() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <nav className={stylesNav.nav}>
          <div className={stylesNav.insideLine}>
            <div className={stylesNav.pageTitle}>
              <h4>全てのメニュー</h4>
              <h1>All Menu</h1>
            </div>

            <ul>
              <li>
                <Scroll
                  to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-230}
                  className={stylesNav.list}
                >
                  <h4>樽ビール</h4>
                  <h1>Barrel Beer</h1>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-230}
                  className={stylesNav.list}
                >
                  <h4>ボトルビール</h4>
                  <h1>Bottle Beer</h1>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-230}
                  className={stylesNav.list}
                >
                  <h4>カクテル</h4>
                  <h1>Cocktail</h1>
                </Scroll>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
