import styles from "../../styles/blog/more.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import dayjs from "dayjs";
import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import type { Blog } from "../../src/types/blog";

export const getStaticPaths = async () => {
  const data = await clientBlog.get({ endpoint: "beer-blog" });

  const paths = data.contents.map(
    (content: { id: string }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

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

export default function HogeId({ detailBlog, monthlyIndex }: Props) {
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
        <link rel="icon" href="/beer-favicon.png" />

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

          <section className={styles.blogSection} id="top">
            <div className={styles.blog}>
              <div className={styles.articleBox}>
                <p className={styles.title}>{detailBlog.title}</p>
                <p className={styles.publishedAt}>
                  {dayjs(detailBlog.publishedAt).format("YYYY年MM月DD日 HH:mm")}
                </p>
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
                <Button en="Latest Blog" jp="最新のブログ" />
              </Link>
            </div>
          </section>
          <footer className={styles.footer} id="down">
            <Footer />
          </footer>
        </section>
      </div>
    </>
  );
}
