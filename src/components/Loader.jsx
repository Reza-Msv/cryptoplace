import styles from "../styles/Loader.module.css";

import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.rotate}>
        <RotatingLines strokeWidth="2" strokeColor="#7927ff" width="100" />
      </div>
    </div>
  );
};

export default Loader;
