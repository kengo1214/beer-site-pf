import styles from "../../../styles/menu/[id].module.scss";
import { clientMenu } from "../../../libs/client";
import type { Menu } from "../../../src/types/menu";
// import Image from "next/legacy/image";
import Image from 'next/image'
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";

//getStaticPaths（パスの指定）🔥🔥🔥
export async function getStaticPaths() {
  const data = await clientMenu.get({ endpoint: "bottle-beer" });

  const paths = data.contents.map(
    (content: { id: string }) => `/menu/bottlebeer/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
}

//getStaticProps（情報取得）🔥🔥🔥
export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const data = await clientMenu.get({ endpoint: "bottle-beer", contentId: id });

  return {
    props: {
      bottlebeer: data,
    },
  };
}

//🔥🔥🔥
type Props = {
  bottlebeer: Menu;
};

export default function MoreInformation({ bottlebeer }: Props) {
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
        <section className={styles.bottleSection}>
          <main className={styles.main}>
            <div className={styles.sectionTitle}>
              <h4>ボトルビール</h4>
              <h1>Bottle Beer</h1>
            </div>
            <div className={styles.itemBox}>
              <h1 className={styles.title}>{bottlebeer.title}</h1>

              <div className={styles.about}>
                <p className={styles.price}>{bottlebeer.price}</p>
                <p
                  className={styles.product}
                  dangerouslySetInnerHTML={{
                    __html: `${bottlebeer.product}`,
                  }}
                />
              </div>

              <p
                className={styles.detail}
                dangerouslySetInnerHTML={{
                  __html: `${bottlebeer.detail}`,
                }}
              />
              <div className={styles.image}>
                <Image
                  src={bottlebeer.image.url}
                  layout="fill"
                  objectFit="contain"
                  alt="image"
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
