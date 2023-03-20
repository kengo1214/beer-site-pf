import styles from "./Button.module.scss";
// import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Button() {
  return (
    <>
      {/* <Link href="/" className={styles.button}> */}
      <div className={styles.button}>
        <p>More</p>
        <AiOutlineDoubleRight size={18} className={styles.icon} />
      </div>
    </>
  );
}
