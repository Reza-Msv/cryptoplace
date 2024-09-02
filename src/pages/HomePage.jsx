import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoinList from "../components/CoinList";
import Description from "../components/Description";
import SearchBox from "../components/SearchBox";
import { getAllCoin } from "../services/service";
import Pagination from "../components/Pagination";
import CoinDetailPage from "./CoinDetailPage";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  useEffect(() => {
    fetch(getAllCoin(page, currency))
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, [page, currency]);

  return (
    <div>
      <Navbar setCurrency={setCurrency} />
      <Description />
      <SearchBox />
      <CoinList coins={coins} currency={currency} />
      <Pagination page={page} setPage={setPage} />
      <Footer />
    </div>
  );
};

export default HomePage;
