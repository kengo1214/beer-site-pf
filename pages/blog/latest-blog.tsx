import styles from "../../styles/blog/latest-blog.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import Link from "next/link";
import Image from "next/legacy/image";

import { clientBlog } from "../../libs/client";
import type { Blog } from "../../src/types/blog";

import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

//SSG(getStaticProps)🔥🔥🔥
export async function getStaticProps() {
  const data = await clientBlog.get({ endpoint: "beer-blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
}

type Props = {
  blog: Blog[];
};

export default function LatestBlog({ blog }: Props) {
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
            <section className={styles.archiveSection}></section>
            <section className={styles.scrollSection}></section>

            <section className={styles.blogSection}>
              {blog.map((blog) => (
                <div className={styles.blog} key={blog.id}>
                  <div className={styles.articleBox}>
                    <div className={styles.article}>
                      <h3>{blog.title}</h3>
                      <div>{blog.publishedAt}</div>
                    </div>
                    <div className={styles.button}>
                      <Link href="/">
                        <Button />
                      </Link>
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
              ))}
            </section>

            <Footer />
          </section>
        </section>
      </div>
    </>
  );
}
