import styles from "../../styles/all-menu/all-menu.module.scss";
import stylesNav from "../../styles/all-menu/all-menu-nav.module.scss";
import Header from "../../components/Header/Header";
import { Link as Scroll } from "react-scroll";
import { clientMenu } from "../../libs/client";
import type { Menu } from "../../src/types/menu"; //🔥🔥🔥
import Image from "next/image";

//SSG(getStaticProps)
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

        <section className={styles.barrelSection}>
          <div className={styles.sectionTitle}>
            <h4>樽ビール</h4>
            <h1>Barrel Beer</h1>
          </div>
          <div className={styles.menuBox}>
            {barrelbeer.map((barrelbeer) => (
              <div className={styles.menuItem} key={barrelbeer.id}>
                <p className={styles.title}>{barrelbeer.title}</p>
                <p className={styles.price}>{barrelbeer.price}</p>
                <p
                  className={styles.product}
                  dangerouslySetInnerHTML={{
                    __html: `${barrelbeer.product}`,
                  }}
                />
                <div className={styles.image}>
                  <Image
                    src={barrelbeer.image}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.bottleSection}></section>

        <section className={styles.cocktailSection}></section>
      </div>
    </>
  );
}
