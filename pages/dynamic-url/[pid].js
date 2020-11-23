import styles from "../another.module.css";
import { useRouter } from "next/router";


function AnotherPage() {

  const { query: { pid } } = useRouter();

  return (
    <h5 className={styles.container}>
      I am a page with dynamic URL
      <br/>
      <br/>
      Page ID: <strong>{pid}</strong>
    </h5>
  );
}

export default AnotherPage;
