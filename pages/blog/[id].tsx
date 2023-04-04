// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

import styles from "../../styles/blog/more.module.scss";
import { clientBlog } from "../../libs/client";
import type { Blog } from "../../src/types/blog";
import { groupBy } from "../../libs/util";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Button/BackButton";

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
  const router = useRouter();

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

          <section className={styles.outlineSection}>
            <section className={styles.blogSection}>
              <div className={styles.blog}>
                <div className={styles.articleBox}>
                  <p className={styles.title}>{blog.title}</p>
                  <p className={styles.publishedAt}>{blog.publishedAt}</p>
                  <p
                    className={styles.detail}
                    dangerouslySetInnerHTML={{
                      __html: `${blog.body}`,
                    }}
                  />
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


              <div className={styles.backButtonBox}>
                  <div onClick={() => router.back()}>
                    <BackButton />
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

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️