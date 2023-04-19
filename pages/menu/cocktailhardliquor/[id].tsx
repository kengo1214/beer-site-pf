import styles from "../../../styles/menu/[id].module.scss";
import { clientMenu } from "../../../libs/client";
import type { Menu } from "../../../src/types/menu";
// import Image from "next/legacy/image";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";

//getStaticPaths（パスの指定）🔥🔥🔥
export async function getStaticPaths() {
  const data = await clientMenu.get({ endpoint: "cocktail-and-hard-liquor" });

  const paths = data.contents.map(
    (content: { id: string }) => `/menu/cocktailhardliquor/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
}

//getStaticProps（情報取得）🔥🔥🔥
export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const data = await clientMenu.get({
    endpoint: "cocktail-and-hard-liquor",
    contentId: id,
  });

  return {
    props: {
      cocktail: data,
    },
  };
}

//🔥🔥🔥
type Props = {
  cocktail: Menu;
};

export default function MoreInformation({ cocktail }: Props) {
  const router = useRouter();

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
        <section className={styles.cocktailSection}>
          <main className={styles.main}>
            <div className={styles.sectionTitle}>
              <h4>カクテル</h4>
              <h1>Cocktail and Hardliquor</h1>
            </div>
            <div className={styles.itemBox}>
              <h1 className={styles.title}>{cocktail.title}</h1>

              <div className={styles.about}>
                <p className={styles.price}>{cocktail.price}</p>
                <p
                  className={styles.product}
                  dangerouslySetInnerHTML={{
                    __html: `${cocktail.product}`,
                  }}
                />
              </div>

              <p
                className={styles.detail}
                dangerouslySetInnerHTML={{
                  __html: `${cocktail.detail}`,
                }}
              />
              <div className={styles.image}>
                <Image
                  src={cocktail.image.url}
                  alt="image"
                  width={468}
                  height={900}
                  className={styles.imageSize}
                />
              </div>
            </div>

            <div className={styles.backButtonBox}>
              <div onClick={() => router.back()}>
                <Button en="Back" jp="戻る" />
              </div>
            </div>
          </main>
        </section>
        <Footer />
      </div>
    </>
  );
}
