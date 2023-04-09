// import styles from "../../styles/blog/archive.module.scss";

import styles from "./archive-blog.module.scss";

import Link from "next/link";
import Image from "next/legacy/image";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HogeButton from "../../components/Button/HogeButton";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

import dayjs from "dayjs";

import { useRouter } from "next/router";

//🔥getStaticPaths
export const getStaticPaths = async () => {
  const data = await clientBlog.get({
    endpoint: "beer-blog",
  });

  const paths = data.contents.map(
    (content: { id: string }) => `/archive-blog/${content.id}`
  );

  return { paths, fallback: false };
};

//🔥getStaticProps
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const detailBlogData = await clientBlog.get({
    endpoint: "beer-blog",
    contentId: id,
  });

  const archiveMonthData = await clientBlog.get({
    endpoint: "beer-blog",
    queries: { limit: 3000 },
  });

  const monthlyIndex = groupBy(archiveMonthData.contents);

  return {
    props: {
      detailBlog: detailBlogData,
      monthlyIndex: monthlyIndex,
    },
  };
};

type Props = {
  detailBlog: Blog;
  monthlyIndex: { [key: string]: Blog[] };
};

export default function Archive({ detailBlog, monthlyIndex }: Props) {
  // console.log(detailBlog);
  // console.log(monthlyIndex);

  const router = useRouter();

  return (
    <>
      <div className={styles.body}>
        <Header />

        <section className={styles.titleSection}>
          <div className={styles.blogSectionTitle}>
            <h4>詳細</h4>
            <h1>Detail Blog</h1>
          </div>

          <div className={styles.archiveSectionTitle}>
            <h4>アーカイブ</h4>
            <h1>Archive</h1>
          </div>
        </section>

        <section className={styles.mainSectiom}>
          <section className={styles.archiveSection}>
            <div className={styles.archiveSectionTitleHidden}>
              <h4>アーカイブ</h4>
              <h1>Archive</h1>
            </div>

            <ul>
              {Object.keys(monthlyIndex).map((index) => (
                <li key={index}>
                  <Link href={`/archive-list/${index}`} className={styles.link}>
                    {index.split("_")[0] + "年" + index.split("_")[1] + "月"}（
                    {monthlyIndex[index].length + "件"}）
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.outlineSection}>
            <section className={styles.blogSection}>
              <div className={styles.blog}>
                <div className={styles.articleBox}>
                  <p className={styles.title}>{detailBlog.title}</p>
                  <p className={styles.publishedAt}>{detailBlog.publishedAt}</p>
                  <p
                    className={styles.detail}
                    dangerouslySetInnerHTML={{
                      __html: `${detailBlog.body}`,
                    }}
                  />
                </div>

                <div className={styles.imageBox}>
                  <div className={styles.image}>
                    <Image
                      src={detailBlog.image.url}
                      layout="fill"
                      objectFit="cover"
                      alt="image"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.buttonBox}>
                <Link href="/blog/latest-blog">
                  <HogeButton name="Latest Blog" />
                </Link>

                <div onClick={() => router.back()} className={styles.button}>
                  <HogeButton name="Back" />
                </div>
              </div>
            </section>
            <footer className={styles.footer}>
              <Footer />
            </footer>
          </section>
        </section>
      </div>
    </>
  );
}
