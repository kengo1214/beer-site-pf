import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import MainHeader from "../components/Header/MainHeader";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>No Beer No Life Tokyo</title>
        <meta
          name="description"
          content="恵比寿に店舗を構え、世界中から厳選されたビールを提供する「No Beer No Life Tokyo」の公式ホームページ。コンセプト、メニュー、ブログ、イベント情報などを紹介。No Beer No Life Tokyoでは、お客様に最高のビール体験を提供いたします。お客様のご来店を心よりお待ちしております。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/image/beer-favicon.png" />

        {/* OGP（Open Graph Protocol） */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="No Beer No Life Tokyo" />
        <meta
          property="og:description"
          content="恵比寿に店舗を構え、世界中から厳選されたビールを提供する「No Beer No Life Tokyo」の公式ホームページ。コンセプト、メニュー、ブログ、イベント情報などを紹介。No Beer No Life Tokyoでは、お客様に最高のビール体験を提供いたします。お客様のご来店を心よりお待ちしております。"
        />
        <meta property="og:site_name" content="No Beer No Life Tokyo" />
        <meta property="og:image" content="/image/home/mainImage.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>

      {/* body  */}

      <div className={styles.body} id="top">
        {/* ヘッダー */}
        <MainHeader />

        <main className={styles.main}>
          {/* メイン画像 */}
          <section className={styles.mainImageSection}></section>

          {/* コンセプト・メッセージ */}
          <section className={styles.sentenceSection}>
            {/* コンセプト */}
            <div className={styles.sentenceBox}>
              <div className={styles.sentenceTitle}>
                <p>コンセプト</p>
                <h1>Concept</h1>
              </div>
              <div className={styles.sentence}>
                <p>
                  当店では海外のビールを専門に取り扱い、ドイツ、フランス、メキシコ、イギリスなどの国のビールを中心に提供しています。私たちは、お客様に新しいビールの味わいを発見していただける場所となることを目指し、常に新しいビールの入荷やイベントなどを企画しています。是非一度、当店で世界のビールをお楽しみください。
                </p>
              </div>
            </div>

            {/* メッセージ */}
            <div className={styles.sentenceBox}>
              <div className={styles.sentenceTitle}>
                <p>メッセージ</p>
                <h1>Message</h1>
              </div>
              <div className={styles.sentence}>
                <p>
                  -
                  私たちはビールの専門家であり、お客様に最高のビール体験を提供することに誇りを持っています。世界中から厳選されたビールを取り揃え、お客様に新しいビールの味わいを発見していただける場所です。また、私たちは、お客様にビールの醸造方法や歴史、文化など様々な情報を提供し、より深いビールの世界をお楽しみいただけるようサポートいたします。当店のスタッフ一同、お客様のご来店を心よりお待ちしております。
                </p>
              </div>
            </div>
          </section>

          {/* リンクセクション */}
          <section className={styles.linkSection}>
            <div className={styles.linkBox}>
              <div className={styles.linkItem}>
                <Link href="/menu/all-menu">
                  <Image
                    src="/image/link/menu-link.jpg"
                    alt="Menu Image"
                    width={3840}
                    height={5760}
                    className={styles.image}
                  />
                  <div className={styles.linkTitle}>
                    <p>メニュー</p>
                    <h1>Menu</h1>
                  </div>
                </Link>
              </div>
              <div className={styles.linkItem}>
                <Link href="/blog/latest-blog">
                  <Image
                    src="/image/link/blog-link.jpg"
                    alt="Menu Image"
                    width={3750}
                    height={5625}
                    className={styles.image}
                  />
                  <div className={styles.linkTitle}>
                    <p>ブログ</p>
                    <h1>Blog</h1>
                  </div>
                </Link>
              </div>

              <div className={styles.linkItem}>
                <Scroll to="contact" smooth={true} duration={800} offset={-100}>
                  <Image
                    src="/image/link/contact-link.jpg"
                    alt="Menu Image"
                    width={3036}
                    height={2162}
                    className={styles.image}
                  />
                  <div className={styles.linkTitle}>
                    <p>お問い合わせ</p>
                    <h1>Contact</h1>
                  </div>
                </Scroll>
              </div>

              <div className={styles.linkItem}>
                <Scroll to="contact" smooth={true} duration={800} offset={-80}>
                  <Image
                    src="/image/link/contact-link.jpg"
                    alt="Menu Image"
                    width={3036}
                    height={2162}
                    className={styles.image}
                  />
                  <div className={styles.linkTitle}>
                    <p>お問い合わせ</p>
                    <h1>Contact</h1>
                  </div>
                </Scroll>
              </div>
            </div>
          </section>

          {/* アクセス */}
          <section className={styles.accessSection}>
            <div className={styles.accessMain}>
              <div className={styles.accessTitle}>
                <p>アクセス</p>
                <h1>Access</h1>
              </div>
              <div className={styles.accessBox}>
                <div className={styles.map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2294450324493!2d139.7078890156115!3d35.64671823947073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4046e3f71d%3A0x85ab1d92ef294edf!2z5oG15q-U5a-_6aeF!5e0!3m2!1sja!2sjp!4v1664439285186!5m2!1sja!2sjp"
                    className={styles.mapSize}
                    style={{ border: 0 }}
                    title="Google Maps"
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

          {/* お問い合わせ */}
          <section className={styles.contactSection} id="contact">
            <div className={styles.contactMain}>
              <div className={styles.contactTitle}>
                <p>お問い合わせ</p>
                <h1>Contact</h1>
              </div>

              <form
                action="https://api.staticforms.xyz/submit"
                method="post"
                className={styles.form}
              >
                <input
                  type="hidden"
                  name="accessKey"
                  value="7adf81ec-942f-4a70-b8d5-e01074e1b7d4"
                />
                {/* リダイレクトする先の指定。現在は旧本番環境に飛ぶように設定してある */}
                <input
                  type="hidden"
                  name="redirectTo"
                  value="/pages/contact-done"
                  // value="https://beer-site-pied.vercel.app/contact-done"
                />
                <div className={styles.contactItem}>
                  <label className={styles.label}>お名前</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="お名前"
                    required
                  />
                </div>
                <div className={styles.contactItem}>
                  <label className={styles.label}>メールアドレス</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    required
                  />
                </div>
                <div className={styles.contactItem}>
                  <label className={styles.label}>ご質問</label>
                  <textarea
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="ご質問はこちら"
                    required
                  />
                </div>

                <div className={styles.buttonBox}>
                  <button
                    type="submit"
                    id="modalOpen"
                    className={styles.submitButton}
                  >
                    <p className={styles.jp}>送信</p>
                    <p className={styles.en}>Submit</p>
                  </button>

                  <button type="reset" className={styles.resetButton}>
                    <p className={styles.jp}>リセット</p>
                    <p className={styles.en}>Reset</p>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* フッター */}
          <Footer />
        </main>
      </div>
    </>
  );
}
