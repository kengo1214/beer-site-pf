import styles from "../../styles/blog/latest-blog.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import Link from "next/link";
import Image from "next/legacy/image";

import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

//SSG(getStaticProps)🔥🔥🔥
export async function getStaticProps() {
  const data = await clientBlog.get({ endpoint: "beer-blog" });

  const monthlyIndex = groupBy(data.contents);

  return {
    props: {
      blog: data.contents,
      monthlyIndex: monthlyIndex,
    },
  };
}

type Props = {
  blog: Blog[];
  monthlyIndex: { [key: string]: Blog[] };
};

export default function LatestBlog({ blog, monthlyIndex }: Props) {
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
