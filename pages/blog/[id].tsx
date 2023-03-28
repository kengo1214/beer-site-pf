// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

import styles from "../../styles/blog/more.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import Link from "next/link";
import Image from "next/legacy/image";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await clientBlog.get({ endpoint: "beer-blog" });

  const paths = data.contents.map(
    (content: { id: string }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await clientBlog.get({ endpoint: "beer-blog", contentId: id });

  const archiveData = await clientBlog.get({ endpoint: "beer-blog" });
  const monthlyIndex = groupBy(archiveData.contents);

  return {
    props: {
      blog: data,
      monthlyIndex: monthlyIndex,
    },
  };
};

type Props = {
  blog: Blog;
  monthlyIndex: { [key: string]: Blog[] };
};

export default function HogeId({ blog, monthlyIndex }: Props) {
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

        <section className={styles.outline}>
          <section className={styles.mainSection}>
            {/* 🔥🔥🔥 */}
            <section className={styles.archiveSection}>
              <ul>
                {Object.keys(monthlyIndex).map((index) => (
                  <li key={index}>
                    <Link href={`/archive/${index}`} className={styles.link}>
                      {index.split("_")[0] + "年" + index.split("_")[1] + "月"}
                      （{monthlyIndex[index].length + "件"}）
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            {/* 🔥🔥🔥 */}

            <section className={styles.blogSection} id="top">
              <div className={styles.blog} key={blog.id}>
                <div className={styles.articleBox}>
                  <div className={styles.article}>
                    <h3>{blog.title}</h3>
                    <div>{blog.publishedAt}</div>
                  </div>
                  <div className={styles.detail}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${blog.body}`,
                      }}
                    />
                  </div>
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

              


            </section>

            <footer id="down">
              <Footer />
            </footer>
          </section>
        </section>
      </div>
    </>
  );
}

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
