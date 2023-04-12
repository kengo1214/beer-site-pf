import styles from "../../styles/menu/all-menu.module.scss";
import stylesNav from "../../styles/menu/all-menu-nav.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { clientMenu } from "../../libs/client";
import Image from "next/legacy/image";
import type { Menu } from "../../src/types/menu";

//SSG(getStaticProps)🔥🔥🔥
export async function getStaticProps() {
  const data01 = await clientMenu.get({ endpoint: "barrel-beer" });
  const data02 = await clientMenu.get({ endpoint: "bottle-beer" });
  const data03 = await clientMenu.get({ endpoint: "cocktail-and-hard-liquor" });

  return {
    props: {
      barrelbeer: data01.contents,
      bottlebeer: data02.contents,
      cocktailhardliquor: data03.contents,
    },
  };
}

//🔥🔥🔥
type Props = {
  barrelbeer: Menu[];
  bottlebeer: Menu[];
  cocktailhardliquor: Menu[];
};

export default function AllMenu({
  barrelbeer,
  bottlebeer,
  cocktailhardliquor,
}: Props) {
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
                  to="a"
                  // to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  // offset={-230}
                  className={stylesNav.list}
                >
                  <h4>樽ビール</h4>
                  <h1>Barrel Beer</h1>
                </Scroll>

                <Scroll
                  to="a"
                  // to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  // offset={-230}
                  className={stylesNav.mobileList}
                >
                  <h4>樽ビール</h4>
                  <h1>Barrel Beer</h1>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="b"
                  // to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  // offset={-230}
                  className={stylesNav.list}
                >
                  <h4>ボトルビール</h4>
                  <h1>Bottle Beer</h1>
                </Scroll>
                <Scroll
                  to="b"
                  // to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  // offset={-230}
                  className={stylesNav.mobileList}
                >
                  <h4>ボトルビール</h4>
                  <h1>Bottle Beer</h1>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="c"
                  // to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  // offset={-230}
                  className={stylesNav.list}
                >
                  <h4>カクテル</h4>
                  <h1>Cocktail</h1>
                </Scroll>
                <Scroll
                  to="c"
                  // to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  // offset={-230}
                  className={stylesNav.mobileList}
                >
                  <h4>カクテル</h4>
                  <h1>Cocktail</h1>
                </Scroll>
              </li>
            </ul>
          </div>
        </nav>

        {/* 🔥🔥🔥 */}
        <section className={styles.barrelSection} id="a">
          <div className={styles.sectionTitle}>
            <h4>樽ビール</h4>
            <h1>Barrel Beer</h1>
          </div>
          <div className={styles.menuBox}>
            {barrelbeer.map((barrelbeer) => (
              <Link
                href={`/menu/barrelbeer/${barrelbeer.id}`}
                className={styles.menuItem}
                key={barrelbeer.id}
              >
                <p className={styles.title}>{barrelbeer.title}</p>

                <div className={styles.about}>
                  <p className={styles.price}>{barrelbeer.price}</p>
                  <p
                    className={styles.product}
                    dangerouslySetInnerHTML={{
                      __html: `${barrelbeer.product}`,
                    }}
                  />
                </div>

                <div className={styles.image}>
                  <Image
                    src={barrelbeer.image.url}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 🔥🔥🔥 */}
        <section className={styles.bottleSection} id="b">
          <div className={styles.sectionTitle}>
            <h4>ボトルビール</h4>
            <h1>Bottle Beer</h1>
          </div>
          <div className={styles.menuBox}>
            {bottlebeer.map((bottlebeer) => (
              <Link
                href={`/menu/bottlebeer/${bottlebeer.id}`}
                className={styles.menuItem}
                key={bottlebeer.id}
              >
                <p className={styles.title}>{bottlebeer.title}</p>

                <div className={styles.about}>
                  <p className={styles.price}>{bottlebeer.price}</p>
                  <p
                    className={styles.product}
                    dangerouslySetInnerHTML={{
                      __html: `${bottlebeer.product}`,
                    }}
                  />
                </div>

                <div className={styles.image}>
                  <Image
                    src={bottlebeer.image.url}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 🔥🔥🔥 */}
        <section className={styles.cocktailSection} id="c">
          <div className={styles.sectionTitle}>
            <h4>カクテル</h4>
            <h1>Cocktail and Hardliquor</h1>
          </div>
          <div className={styles.menuBox}>
            {cocktailhardliquor.map((cocktailhardliquor) => (
              <Link
                href={`/menu/cocktailhardliquor/${cocktailhardliquor.id}`}
                className={styles.menuItem}
                key={cocktailhardliquor.id}
              >
                <p className={styles.title}>{cocktailhardliquor.title}</p>

                <div className={styles.about}>
                  <p className={styles.price}>{cocktailhardliquor.price}</p>
                  <p
                    className={styles.product}
                    dangerouslySetInnerHTML={{
                      __html: `${cocktailhardliquor.product}`,
                    }}
                  />
                </div>

                <div className={styles.image}>
                  <Image
                    src={cocktailhardliquor.image.url}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
