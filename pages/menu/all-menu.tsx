import styles from "../../styles/menu/all-menu.module.scss";
import stylesNav from "../../styles/menu/all-menu-nav.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link as Scroll } from "react-scroll";
import Head from "next/head";
import Link from "next/link";
import { clientMenu } from "../../libs/client";
// import Image from "next/legacy/image";
import Image from "next/image";
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
      <Head>
        <title>Menu | No Beer No Life Tokyo</title>
        <meta
          name="description"
          content="No Beer No Life Tokyoのメニューページ。世界中から厳選された樽ビール、瓶ビール、カクテル・ハードリカーを紹介します。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/beer-favicon.png" />

        {/* OGP（Open Graph Protocol） */}

        <meta property="og:type" content="product" />
        <meta property="og:title" content="Menu | No Beer No Life Tokyo" />
        <meta
          property="og:description"
          content="No Beer No Life Tokyoのメニューページ。世界中から厳選された樽ビール、瓶ビール、カクテル・ハードリカーを紹介します。"
        />
        <meta property="og:site_name" content="No Beer No Life Tokyo" />
        <meta property="og:image" content="/image/menu-link.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>

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
                    width={468}
                    height={900}
                    className={styles.imageSize}
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
                    width={468}
                    height={900}
                    className={styles.imageSize}
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
                    width={468}
                    height={900}
                    className={styles.imageSize}
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
