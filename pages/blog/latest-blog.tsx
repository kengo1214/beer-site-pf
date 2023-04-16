import styles from "../../styles/blog/latest-blog.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/legacy/image";
import dayjs from "dayjs";
import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

export async function getStaticProps() {
  const latestBlogData = await clientBlog.get({
    endpoint: "beer-blog",
    queries: { limit: 10 },
  });

  const archiveMonthData = await clientBlog.get({
    endpoint: "beer-blog",
    queries: { limit: 3000 },
  });

  const monthlyIndex = groupBy(archiveMonthData.contents);

  return {
    props: {
      latestBlog: latestBlogData.contents,
      monthlyIndex: monthlyIndex,
    },
  };
}

type Props = {
  latestBlog: Blog[];
  monthlyIndex: { [key: string]: Blog[] };
};

export default function LatestBlog({ latestBlog, monthlyIndex }: Props) {
  return (
    <>
      <div className={styles.body}>
        <Header />

        <section className={styles.titleSection}>
          <div className={styles.blogSectionTitle}>
            <h4>最新のブログ</h4>
            <h1>Latest Blog</h1>
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

          <section className={styles.blogSection} id="top">
            {latestBlog.map((latestBlog) => (
              <Link
                href={`/blog/${latestBlog.id}`}
                className={styles.link}
                key={latestBlog.id}
              >
                <div className={styles.blog}>
                  <div className={styles.articleBox}>
                    <p className={styles.title}>{latestBlog.title}</p>
                    <p className={styles.publishedAt}>
                      {dayjs(latestBlog.publishedAt).format(
                        "YYYY年MM月DD日 HH:mm"
                      )}
                    </p>
                  </div>

                  <div className={styles.imageBox}>
                    <div className={styles.image}>
                      <Image
                        src={latestBlog.image.url}
                        layout="fill"
                        objectFit="cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
          <footer className={styles.footer} id="down">
            <Footer />
          </footer>
        </section>
      </div>
    </>
  );
}
