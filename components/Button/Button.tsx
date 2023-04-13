import styles from "./Button.module.scss";
import { AiOutlineRollback } from "react-icons/ai";

interface Props {
  en: string;
  jp: string;
}

export default function Button(props: Props) {
  return (
    <>
      <button className={styles.button}>
        <div className={styles.icon}>
          <AiOutlineRollback size={18} />
        </div>
        <div className={styles.title}>
          <p className={styles.jp}>{props.jp}</p>
          <p className={styles.en}>{props.en}</p>
        </div>
      </button>
    </>
  );
}
