import styles from "./Button.module.scss";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Button() {
  return (
    <>
      <div className={styles.button}>
        <p>More</p>
        <AiOutlineDoubleRight size={18} className={styles.icon} />
      </div>
    </>
  );
}
