import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoinDetailPage from "./pages/CoinDetailPage";
import PricingPage from "./pages/PricingPage";
import Blog from "./pages/BlogPage";
import ApiPage from "./pages/ApiPage";
import NotFoundPage from "./pages/404.page";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/cryptoplace" element={<HomePage />} />
        <Route path="/" element={<Navigate to={"/cryptoplace"} />} />
        <Route path="/coin/:coinid" element={<CoinDetailPage />} />
        <Route path="/cryptoplace/coin/:coinid" element={<CoinDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
