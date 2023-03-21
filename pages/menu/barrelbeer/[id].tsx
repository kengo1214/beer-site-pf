import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { clientMenu } from "../../../libs/client";
import Header from "../../../components/Header/Header";
import { AiOutlineRollback } from "react-icons/ai";
import styles from "../../../styles/[id].module.scss";

import type { Menu } from "../../../src/types/menu";
import Footer from "../../../components/Footer/Footer";
import BuckButton from "../../../components/Button/BackButton";
import Link from "next/link";

//getStaticPaths（パスの指定）🔥🔥🔥
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

//getStaticProps（情報取得）🔥🔥🔥
export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const data = await clientMenu.get({ endpoint: "barrel-beer", contentId: id });

  return {
    props: {
      barrelbeer: data,
    },
  };
}

//🔥🔥🔥
type Props = {
  barrelbeer: Menu;
};

export default function MoreInformation({ barrelbeer }: Props) {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <section className={styles.section}>
          <main className={styles.main}>
            <div className={styles.sectionTitle}>
              <h4>樽ビール</h4>
              <h1>Barrel Beer</h1>
            </div>
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
                  layout="fill"
                  objectFit="contain"
                  alt="image"
                />
              </div>
            </div>

            <div className={styles.back}>
              <Link href="/">
                <BuckButton />
              </Link>
            </div>
          </main>
        </section>
        <Footer />
      </div>
    </>
  );
}
