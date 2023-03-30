import styles from "./Button.module.scss";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Button() {
  return (
    <>
      <div className={`${styles.button} ${styles.blogButton}`}>
        <p>More</p>
        <AiOutlineDoubleRight className={styles.icon} />
      </div>
    </>
  );
}
