import styles from "../../styles/archive//archive-list.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import dayjs from "dayjs";
import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

//getStaticPaths
export const getStaticPaths = async () => {
  const data = await clientBlog.get({
    endpoint: "beer-blog",
    queries: { fields: "publishedAt", limit: 3000 },
  });
  const monthlyIndex = groupBy(data.contents);

  const paths = Object.keys(monthlyIndex).map(
    (index) => `/archive-list/${index}`
  );
  return { paths, fallback: false };
};

//getStaticProps
export const getStaticProps = async (context: {
  params: { archiveList: string };
}) => {
  const date = context.params.archiveList;
  const year = parseInt(date.split("_")[0], 10);
  const month = parseInt(date.split("_")[1], 10);

  // microCMSのfiltersクエリは >= を表現できないので開始時刻は1ミリ秒引いておく
  const startOfMonthTmp = new Date(year, month - 1, 1);
  const startOfMonth = new Date(startOfMonthTmp.getTime() - 1);
  const endOfMonth = new Date(year, month, 0);

  // filtersクエリで該当月の記事のみを取得
  const filters = `publishedAt[greater_than]${startOfMonth.toISOString()}[and]publishedAt[less_than]${endOfMonth.toISOString()}`;

  const archiveBlogData = await clientBlog.get({
    endpoint: "beer-blog",
    queries: {
      filters: filters,
    },
  });

  const archiveMonthData = await clientBlog.get({
    endpoint: "beer-blog",
    queries: { limit: 3000 },
  });

  const monthlyIndex = groupBy(archiveMonthData.contents);
  const titleEnglish = dayjs(`${month}`).format("MMMM");

  return {
    props: {
      title: `${year}年${month}月の記事`,
      titleEnglish: ` ${titleEnglish} ${year}`,
      archiveBlog: archiveBlogData.contents,
      monthlyIndex: monthlyIndex,
    },
  };
};

type Props = {
  title: string;
  titleEnglish: string;
  archiveBlog: Blog[];
  monthlyIndex: { [key: string]: Blog[] };
};

export default function Archive({
  title,
  titleEnglish,
  archiveBlog,
  monthlyIndex,
}: Props) {
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

        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Blog | No Beer No Life Tokyo" />
        <meta
          property="og:description"
          content="No Beer No Life Tokyoのブログページ。新メニュー、営業時間の変更、イベント情報など発信しています。"
        />
        <meta property="og:site_name" content="No Beer No Life Tokyo" />
        <meta property="og:image" content="/image/blog-link.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>

      {/* body */}

      <div className={styles.body}>
        {/* ヘッダー */}
        <Header />

        {/* タイトルセクション（filtersクエリで取得された該当月が表示） */}

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
          {/* アーカイブ */}
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

          {/* アーカイブブログ */}
          <section className={styles.blogSection} id="top">
            {archiveBlog.map((archiveBlog) => (
              <Link
                href={`/archive-blog/${archiveBlog.id}`}
                className={styles.link}
                key={archiveBlog.id}
              >
                <div className={styles.blog}>
                  <div className={styles.articleBox}>
                    <p className={styles.title}>{archiveBlog.title}</p>
                    <p className={styles.publishedAt}>
                      {dayjs(archiveBlog.publishedAt).format(
                        "YYYY年MM月DD日 HH:mm"
                      )}
                    </p>
                  </div>

                  <div className={styles.imageBox}>
                    <div className={styles.image}>
                      <Image
                        src={archiveBlog.image.url}
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

            {/* ボタン（「最新のブログ（Latest Blog）」へ遷移する） */}

            <div className={styles.buttonBox}>
              <Link href="/blog/latest-blog">
                <Button en="Latest Blog" jp="最新のブログ" />
              </Link>
            </div>
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
