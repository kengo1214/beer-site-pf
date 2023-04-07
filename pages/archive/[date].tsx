import styles from "../../styles/blog/archive.module.scss";

import Link from "next/link";
import Image from "next/legacy/image";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

import dayjs from "dayjs";

//🔥getStaticPaths
export const getStaticPaths = async () => {
  const data = await clientBlog.get({
    endpoint: "beer-blog",
    queries: { fields: "publishedAt" },
  });
  const monthlyIndex = groupBy(data.contents);

  const paths = Object.keys(monthlyIndex).map((index) => `/archive/${index}`);
  return { paths, fallback: false };
};

//🔥getStaticProps
export const getStaticProps = async (context: { params: { date: string } }) => {
  const date = context.params.date;

  const year = parseInt(date.split("_")[0], 10);
  const month = parseInt(date.split("_")[1], 10);

  // microCMSのfiltersクエリは >= を表現できないので開始時刻は1ミリ秒引いておく
  const startOfMonthTmp = new Date(year, month - 1, 1);
  const startOfMonth = new Date(startOfMonthTmp.getTime() - 1);

  const endOfMonth = new Date(year, month, 0);

  // filtersクエリで該当月の記事のみを取得
  const filters = `publishedAt[greater_than]${startOfMonth.toISOString()}[and]publishedAt[less_than]${endOfMonth.toISOString()}`;

  const data = await clientBlog.get({
    endpoint: "beer-blog",
    queries: {
      filters: filters,
    },
  });

  const archiveData = await clientBlog.get({
    endpoint: "beer-blog",
  });

  const monthlyIndex = groupBy(archiveData.contents);

  const titleEnglish = dayjs(`${month}`).format("MMMM");

  return {
    props: {
      title: `${year}年${month}月の記事`,
      titleEnglish: ` ${titleEnglish} ${year}`,
      blog: data.contents,
      monthlyIndex: monthlyIndex,
    },
  };
};

type Props = {
  title: string;
  titleEnglish: string;
  blog: Blog[];
  monthlyIndex: { [key: string]: Blog[] };
};

export default function Archive({
  title,
  titleEnglish,
  blog,
  monthlyIndex,
}: Props) {
  return (
    <>
      <div className={styles.body}>
        <Header />

        <section className={styles.titleSection}>
          <div className={styles.blogSectionTitle}>
            <h4>{title}</h4>
            <h1>{titleEnglish}</h1>
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
                  <Link href={`/archive/${index}`} className={styles.link}>
                    {index.split("_")[0] + "年" + index.split("_")[1] + "月"}（
                    {monthlyIndex[index].length + "件"}）
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.scrollSection}>
            <div className={styles.scroll}>
              <Link href="#top">
                <BsFillArrowUpCircleFill className={styles.scrollTop} />
              </Link>
              <Link href="#down">
                <BsFillArrowDownCircleFill className={styles.scrollDown} />
              </Link>
            </div>
          </section>

          <section className={styles.outlineSection}>
            <section className={styles.blogSection}>
              {blog.map((blog) => (
                <Link
                  href={`/blog/${blog.id}`}
                  className={styles.link}
                  key={blog.id}
                >
                  <div className={styles.blog}>
                    <div className={styles.articleBox}>
                      <p className={styles.title}>{blog.title}</p>
                      <p className={styles.publishedAt}>{blog.publishedAt}</p>
                    </div>

                    <div className={styles.imageBox}>
                      <div className={styles.image}>
                        <Image
                          src={blog.image.url}
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
            <footer className={styles.footer}>
              <Footer />
            </footer>
          </section>
        </section>
      </div>
    </>
  );
}
