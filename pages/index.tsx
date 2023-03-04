import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <main className={styles.main}>
          <section className={styles.mainImageSection}></section>
          <section className={styles.sentenceSection}>
            <div className={styles.sentenceBox}>
              <div className={styles.title}>
                <h4>コンセプト</h4>
                <h1>Concept</h1>
              </div>
              <div className={styles.sentence}>
                <p>
                  React
                  は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルなViewを設計するだけで、Reactはデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。宣言的なViewを用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
                </p>
              </div>
            </div>
            <div className={styles.sentenceBox}>
              <div className={styles.title}>
                <h4>メッセージ</h4>
                <h1>Message</h1>
              </div>
              <div className={styles.sentence}>
                <p>
                  React
                  は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルなViewを設計するだけで、Reactはデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。宣言的なViewを用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
