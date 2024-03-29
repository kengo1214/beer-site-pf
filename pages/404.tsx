/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/404.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>ページが見つかりません | No Beer No Life Tokyo</title>
        <meta
          name="description"
          content="お探しのページが見つかりませんでした。大変申し訳ございません。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/image/beer-favicon.png" />
      </Head>

      <div className={styles.body}>
        <Header />
        <main className={styles.main}>
          <div className={styles.sentenceBox}>
            <h1>Sorry we couldn't find that page.</h1>
            <p>
              お探しのページが見つかりませんでした。URLが間違っているかページが存在しません。
            </p>
          </div>

          <Link href="/" className={styles.button}>
            <Button jp="ホーム" en="Home" />
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
