import styles from "../../../styles/menu/[id].module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import { clientMenu } from "../../../libs/client";
import type { Menu } from "../../../src/types/menu";

//getStaticPaths
export async function getStaticPaths() {
  const data = await clientMenu.get({ endpoint: "barrel-beer" });

  const paths = data.contents.map(
    (content: { id: string }) => `/menu/barrelbeer/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
}

//getStaticProps
export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const data = await clientMenu.get({ endpoint: "barrel-beer", contentId: id });

  return {
    props: {
      barrelbeer: data,
    },
  };
}

type Props = {
  barrelbeer: Menu;
};

export default function MoreInformation({ barrelbeer }: Props) {
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
        <Header />
        <section className={styles.barrelSection}>
          <main className={styles.main}>
            {/* ページタイトル*/}
            <div className={styles.sectionTitle}>
              <h4>樽ビール</h4>
              <h1>Barrel Beer</h1>
            </div>

            {/* 商品詳細 */}
            <div className={styles.itemBox}>
              <h1 className={styles.title}>{barrelbeer.title}</h1>

              <div className={styles.about}>
                <p className={styles.price}>{barrelbeer.price}</p>
                <p
                  className={styles.product}
                  dangerouslySetInnerHTML={{
                    __html: `${barrelbeer.product}`,
                  }}
                />
              </div>

              <p
                className={styles.detail}
                dangerouslySetInnerHTML={{
                  __html: `${barrelbeer.detail}`,
                }}
              />
              <div className={styles.image}>
                <Image
                  src={barrelbeer.image.url}
                  alt="image"
                  width={468}
                  height={900}
                  className={styles.imageSize}
                />
              </div>
            </div>

            {/* 戻るボタン */}
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
