import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { clientMenu } from "../../../libs/client";
import Header from "../../../components/Header/Header";
import { AiOutlineRollback } from "react-icons/ai";
import styles from "../../../styles/[id].module.scss";
import type { Menu } from "../../../src/types/menu";

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
        <section className={styles.barrelSection}>
          <div className={styles.item}>{barrelbeer.id}</div>
          <div className={styles.item}>{barrelbeer.title}</div>
          <div className={styles.item}>{barrelbeer.price}</div>
          <div className={styles.item}>{barrelbeer.product}</div>
          <div className={styles.item}>{barrelbeer.detail}</div>
          <div className={styles.item}>{barrelbeer.image.url}</div>
        </section>
      </div>
    </>
  );
}
