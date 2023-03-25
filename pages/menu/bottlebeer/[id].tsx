import styles from "../../../styles/menu/[id].module.scss";
import { clientMenu } from "../../../libs/client";
import type { Menu } from "../../../src/types/menu";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import BuckButton from "../../../components/Button/BackButton";

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

            <div className={styles.back} onClick={() => router.back()}>
              <BuckButton />
            </div>
          </main>
        </section>
        <Footer />
      </div>
    </>
  );
}
