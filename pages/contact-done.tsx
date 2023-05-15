import Link from "next/link";
import Head from "next/head";
import styles from "../styles/contact-done.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

export default function ContactDone() {
  return (
    <>
      <Head>
        <title>送信完了 | No Beer No Life Tokyo</title>
        <meta
          name="description"
          content="お問い合わせいただきまして、誠にありがとうございます。
          追って担当者よりご連絡を差し上げますので、今しばらくお待ちくださいませ。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/image/beer-favicon.png" />
      </Head>

      <div className={styles.body}>
        <Header />
        <main className={styles.main}>
          <div className={styles.sentenceBox}>
            <h1>Thank you !!!</h1>
            <p>
              お問い合わせいただきまして、誠にありがとうございます。
              追って担当者よりご連絡を差し上げますので、今しばらくお待ちくださいませ。
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
