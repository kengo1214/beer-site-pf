import styles from "../../styles/blog/latest-blog.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import dayjs from "dayjs";
import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

export async function getStaticProps() {
  const latestBlogData = await clientBlog.get({
    endpoint: "beer-blog",
    queries: { limit: 5 },
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
      <Head>
        <title>Blog | No Beer No Life Tokyo</title>
        <meta
          name="description"
          content="No Beer No Life Tokyoのブログページ。新メニュー、営業時間の変更、イベント情報など発信しています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/image/beer-favicon.png" />

        {/* OGP（Open Graph Protocol） */}
        <meta
          property="og:url"
          content="https://nobeernolifetokyo.com/blog/latest-blog"
        />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Blog | No Beer No Life Tokyo" />
        <meta
          property="og:description"
          content="No Beer No Life Tokyoのブログページ。新メニュー、営業時間の変更、イベント情報など発信しています。"
        />
        <meta property="og:site_name" content="No Beer No Life Tokyo" />
        <meta property="og:image" content="/image/link/blog-link.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>

      {/* body */}

      <div className={styles.body}>
        {/* ヘッダー */}
        <Header />

        {/* タイトルセクション */}
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
          {/* アーカイブ　 */}
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

          {/* ブログ */}
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
                        alt="image"
                        width={2048}
                        height={3072}
                        className={styles.imageSize}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>

          {/* フッター */}

          <footer className={styles.footer} id="down">
            <Footer />
          </footer>
        </section>
      </div>
    </>
  );
}
