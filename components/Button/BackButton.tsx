import styles from "./BackButton.module.scss";
// import Link from "next/link";
import { AiOutlineRollback } from "react-icons/ai";

export default function BackButton() {
  return (
    <>
      <div className={styles.backButton}>
        <AiOutlineRollback size={18} className={styles.icon} />
        <p>Back</p>
      </div>
    </>
  );
}
