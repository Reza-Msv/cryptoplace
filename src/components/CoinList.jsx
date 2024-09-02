import { Link } from "react-router-dom";
import chartdown from "../assets/chart-down.svg";
import chartup from "../assets/chart-up.svg";

import styles from "../styles/CoinList.module.css";
import Loader from "./Loader";

const CoinList = ({ coins, currency }) => {
  return (
    <div className={styles.container}>
      {/* <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Coins</th>
            <th>Price</th>
            <th>24h</th>
            <th>Totol Volume</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div className={styles.symbol}>
                  <img src={coin.image} alt="coin-image" />
                  <div>
                    {coin.name}
                    {" - "} {coin.symbol}
                  </div>
                </div>
              </td>
              <td>
                {currency.symbol} {coin.current_price.toLocaleString()}
              </td>
              <td
                className={
                  coin.price_change_24h > 0 ? styles.success : styles.error
                }
              >
                {" "}
                {coin.price_change_24h.toFixed(2)}%
              </td>
              <td>
                {currency.symbol} {coin.total_volume.toLocaleString()}
              </td>
              <td>
                <img
                  src={coin.price_change_24h > 0 ? chartup : chartdown}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Coins</th>
            <th>Price</th>
            <th>24h</th>
            <th className={styles.last}>Total Volume</th>
            <th className={styles.delete}></th>
          </tr>
        </thead>
        <tbody>
          {!coins.length ? (
            <tr>
              <td colSpan="6">
                <Loader />
              </td>
            </tr>
          ) : (
            coins.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.market_cap_rank}</td>
                <td>
                  <Link to={`coin/${coin.id}`}>
                    <div className={styles.symbol}>
                      <img src={coin.image} alt="coin-image" />
                      <div>
                        {coin.name} - {coin.symbol}
                      </div>
                    </div>
                  </Link>
                </td>
                <td  className={styles.res}>
                  {currency.symbol} {coin.current_price.toLocaleString()}
                </td>
                <td
                  className={`
                    ${coin.price_change_24h > 0 ? styles.success : styles.error}
                    `}
                >
                  {coin.price_change_24h.toFixed(2)}%
                </td>
                <td className={styles.last}>
                  {currency.symbol} {coin.total_volume.toLocaleString()}
                </td>
                <td className={styles.delete}>
                  <img
                    src={coin.price_change_24h > 0 ? chartup : chartdown}
                    alt="chart-down"
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
