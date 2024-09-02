import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { point, price } from "../constants/constants";

import styles from "../styles/PricingPage.module.css";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.headline}>
        <h1>
          Powerful <span>Crypto</span> Data API
        </h1>
        <p>
          Access real-time crypto price, market data, NFT floor prices, trading
          volume, trading pairs, metadata, historical data, and more with our
          crypto data API.
        </p>
      </div>
      <div className={styles.show}>
        {point.map((item) => (
          <div key={item.key}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.price}>
        {price.map((item) => (
          <div className={styles.subscribe} key={item.id}>
            <h3>{item.level}</h3>
            <h4>{item.cap}</h4>
            <button>Subscribe Now</button>
            <p>✔️{item.credits}</p>
            <p>✔️{item.limit}</p>
            <p>✔️{item.market}</p>
            <p>✔️{item.exclusive}</p>
            <p>✔️{item.year}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
