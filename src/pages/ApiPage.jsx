import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { options } from "../constants/constants";

import styles from "../styles/ApiPage.module.css";

const ApiPage = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.head}>
        The world's <span className={styles.first}>cryptocurrency</span> data
        <br />
        authority has a professional API
        <br /> <span className={styles.second}>made for you.</span>
      </h1>
      <div className={styles.condition}>
        <button>GET YOUR API KEY NOW</button>
        <button>COMPARSE API PLANS</button>
      </div>
      <h1 className={styles.head}>
        Your private key for all crypto use cases.
      </h1>
      <div className={styles.options}>
        {options.map((item) => (
          <div className={styles.item} key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <div className={styles.view}>
        <button>VIEW PLANS</button>
      </div>
      <Footer />
    </>
  );
};

export default ApiPage;
