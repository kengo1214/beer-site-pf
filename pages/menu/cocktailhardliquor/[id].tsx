import styles from "../../../styles/menu/[id].module.scss";
import { clientMenu } from "../../../libs/client";
import type { Menu } from "../../../src/types/menu";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import HogeButton from "../../../components/Button/HogeButton";

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
                  layout="fill"
                  objectFit="contain"
                  alt="image"
                />
              </div>
            </div>

            <div className={styles.backButtonBox}>
              <div onClick={() => router.back()}>
                <HogeButton name="Back" />
              </div>
            </div>
          </main>
        </section>
        <Footer />
      </div>
    </>
  );
}
