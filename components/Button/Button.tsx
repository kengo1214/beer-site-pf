import styles from "./Button.module.scss";
import { AiOutlineRollback } from "react-icons/ai";

interface Props {
  en: string;
  jp: string;
}

export default function Button(props: Props) {
  return (
    <>
      <div className={styles.button}>
        <div className={styles.icon}>
          <AiOutlineRollback />
        </div>
        <div className={styles.title}>
          <p className={styles.jp}>{props.jp}</p>
          <p className={styles.en}>{props.en}</p>
        </div>
      </div>
    </>
  );
}
