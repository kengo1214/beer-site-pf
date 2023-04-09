import styles from "./HogeButton.module.scss";
import { AiOutlineRollback } from "react-icons/ai";

interface Props {
  name: string;
}

export default function HogeButton(props:Props) {
  return (
    <>
      <div className={`${styles.button} ${styles.blogButton}`}>
        <AiOutlineRollback className={styles.icon} />
        <p>{props.name}</p>
      </div>
    </>
  );
}