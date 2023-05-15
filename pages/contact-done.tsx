import Link from "next/link";
import styles from "../styles/contact-done.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

export default function ContactDone() {
  return (
    <>
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
