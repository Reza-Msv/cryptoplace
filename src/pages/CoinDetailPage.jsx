import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getChart, getdetail } from "../services/service";
import { convertData, shortenText } from "../helper/convertData";

import styles from "../styles/CoinDetailPage.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CoinDetailPage = () => {
  const parasm = useParams();

  const [chart, setChart] = useState([]);
  const [type, setType] = useState("market_caps");
  const [coinDetail, setCoinDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getChart(parasm.coinid));
        setChart(await response.json());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await fetch(getdetail(parasm.coinid));
        setCoinDetail(await response.json());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCoin();
  }, []);

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.name}>
        <img src={coinDetail.image?.small} alt="coin-img" />
        <p>{coinDetail.name}</p>
      </div>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={convertData(chart, type)}>
              <Line
                type="monotone"
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2px"
              />
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey="date" hide />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div onClick={typeHandler} className={styles.types}>
          <button>Prices</button>
          <button>Market Caps</button>
          <button>Total Volumes</button>
        </div>
        <div className={styles.detail}>
          <p>Rank: {coinDetail.market_cap_rank}</p>
          <p>{shortenText(coinDetail.description?.en)} </p>
          <p>
            Market Cap:{" "}
            <span>
              {coinDetail.market_data?.market_cap_change_24h.toLocaleString()}
            </span>
          </p>
          <p>
            Totoal Volume:
            <span>
              {coinDetail.market_data?.total_volume.aed.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoinDetailPage;
