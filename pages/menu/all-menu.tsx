import styles from "../../styles/menu/all-menu.module.scss";
import stylesNav from "../../styles/menu/all-menu-nav.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { clientMenu } from "../../libs/client";
import type { Menu } from "../../src/types/menu";

// getStaticProps
export async function getStaticProps() {
  const barrelData = await clientMenu.get({ endpoint: "barrel-beer" });
  const bottleData = await clientMenu.get({ endpoint: "bottle-beer" });
  const cocktailData = await clientMenu.get({
    endpoint: "cocktail-and-hard-liquor",
  });

  return {
    props: {
      barrelbeer: barrelData.contents,
      bottlebeer: bottleData.contents,
      cocktailhardliquor: cocktailData.contents,
    },
  };
}

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
        <link rel="icon" href="/image/beer-favicon.png" />

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

      {/* body */}

      <div className={styles.body}>
        {/* ヘッダー */}

        <Header />

        {/* スクロールナビゲーション */}

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
                  offset={-100}
                  className={stylesNav.list}
                >
                  <h4>樽ビール</h4>
                  <h1>Barrel Beer</h1>
                </Scroll>

                <Scroll
                  to="barrel"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className={stylesNav.mobileList}
                >
                  <h4>樽ビール</h4>
                  <h1>Barrel Beer</h1>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="bottle"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className={stylesNav.list}
                >
                  <h4>ボトルビール</h4>
                  <h1>Bottle Beer</h1>
                </Scroll>
                <Scroll
                  to="bottle"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className={stylesNav.mobileList}
                >
                  <h4>ボトルビール</h4>
                  <h1>Bottle Beer</h1>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="cocktail"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className={stylesNav.list}
                >
                  <h4>カクテル</h4>
                  <h1>Cocktail</h1>
                </Scroll>
                <Scroll
                  to="cocktail"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className={stylesNav.mobileList}
                >
                  <h4>カクテル</h4>
                  <h1>Cocktail</h1>
                </Scroll>
              </li>
            </ul>
          </div>
        </nav>

        {/* 樽ビール（Barrel Beer）*/}

        <section className={styles.barrelSection} id="barrel">
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

        {/* ボトルビール（Bottle Beer）*/}

        <section className={styles.bottleSection} id="bottle">
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

        {/* カクテル・ハードリカー（Cocktail and Hardliquor）*/}

        <section className={styles.cocktailSection} id="cocktail">
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

        {/* フッター */}
        <Footer />
      </div>
    </>
  );
}
