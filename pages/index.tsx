import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
          <section className={styles.linkSection}>
            <div className={styles.linkBox}>
              <div className={styles.linkItem}>
                <Link href="/menu">
                  <Image
                    src="/image/menu-link.jpg"
                    alt="Menu Image"
                    layout="fill"
                    objectFit="cover"
                    className={styles.image}
                  />
                  <h1>Menu</h1>
                </Link>
              </div>
              <div className={styles.linkItem}>
                <Link href="/blog">
                  <Image
                    src="/image/blog-link.jpg"
                    alt="Menu Image"
                    layout="fill"
                    objectFit="cover"
                    className={styles.image}
                  />
                  <h1>Blog</h1>
                </Link>
              </div>
              <div className={styles.linkItem}>
                <Link href="#contact">
                  <Image
                    src="/image/contact-link.jpg"
                    alt="Menu Image"
                    layout="fill"
                    objectFit="cover"
                    className={styles.image}
                  />
                  <h1>Contact</h1>
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.accessSection}>
            <div className={styles.accessMain}>
              <div className={styles.accessTitle}>
                <h4>アクセス</h4>
                <h1>Access</h1>
              </div>
              <div className={styles.accessBox}>
                <div className={styles.map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2294450324493!2d139.7078890156115!3d35.64671823947073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4046e3f71d%3A0x85ab1d92ef294edf!2z5oG15q-U5a-_6aeF!5e0!3m2!1sja!2sjp!4v1664439285186!5m2!1sja!2sjp"
                    className={styles.mapSize}
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
                <div className={styles.sentenceBox}>
                  <div className={styles.sentenceItem}>
                    <p className={styles.title}>住所</p>
                    <p className={styles.sentence}>
                      〒150-0000 東京都渋谷区恵比寿1-2-3 エビスビル1F
                    </p>
                  </div>

                  <div className={styles.sentenceItem}>
                    <p className={styles.title}>電話番号</p>
                    <p className={styles.sentence}>000-1234-5678</p>
                  </div>

                  <div className={styles.sentenceItem}>
                    <p className={styles.title}>営業時間</p>
                    <p className={styles.sentence}>
                      平日 15:00~23:00 / 土日祝13:00~23:00
                    </p>
                  </div>

                  <div className={styles.sentenceItem}>
                    <p className={styles.title}>最寄駅</p>
                    <div className={styles.outLine}>
                      <p className={styles.sentence}>
                        JR山手線・埼京線・湘南新宿ライン「恵比寿駅」徒歩3分
                      </p>
                      <p className={styles.sentence}>
                        東京メトロ日比谷線「恵比寿駅」徒歩3分
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
