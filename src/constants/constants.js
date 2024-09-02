const navBar = [
  { id: 1, path: "cryptoplace", name: "CryptoPlace" },
  { id: 2, path: "pricing", name: "Pricing" },
  { id: 3, path: "api", name: "Api" },
  { id: 4, path: "blog", name: "Blog" },
];

const currencyValue = [
  { id: 1, value: "usd", name: "USD" },
  { id: 2, value: "eur", name: "EUR" },
  { id: 3, value: "jpy", name: "JPY" },
];

const options = [
  {
    id: 1,
    title: "Backtest your strategies",
    body: "Use the best possible crypto data to run simulations and backtest your trading or investing strategies. With data aggregated from hundreds of exchanges and thousands of coins, you can be sure that you're getting the right picture every single time.",
  },
  {
    id: 2,
    title: "Chart the right data",
    body: "Show your users the most accurate data on the market with our API. Whether you're building a wallet, a portfolio management tool, a new media offering, or more, we have the most advanced and updated data on the market for your product.",
  },
  {
    id: 3,
    title: "Beat the competition",
    body: "Check in on how other exchanges and coins are doing with our markets data. With deep insight into current and past pricing, volume and exchange info, you can make the right decisions to stay ahead.",
  },
  {
    id: 4,
    title: "Run experiments",
    body: "Build your own models with our data, to further your interest or just for fun. With our flexible and powerful API, we provide you with a set of data that will help you draw insights and make conclusions.",
  },
];

const price = [
  {
    id: 1,
    level: "Analyst",
    cap: "For mission-critical analysis work",
    price: "129",
    credits: "500k call credits",
    limit: "500 rate limit",
    market: "60+ market data endpoints",
    exclusive: "Exclusive data endpoints",
    year: "10 years historical data",
  },
  {
    id: 2,
    level: "Lite",
    cap: "Best for growing projects",
    price: "499",
    credits: "2m call credits",
    limit: "500 rate limit",
    market: "60+ market data endpoints",
    exclusive: "Exclusive data endpoints",
    year: "10 years historical data",
  },
  {
    id: 3,
    level: "Pro",
    cap: "Scale your projects like a pro",
    price: "999",
    credits: "5m call credits",
    limit: "1,000 rate limit",
    market: "60+ market data endpoints",
    exclusive: "Exclusive data endpoints",
    year: "10 years historical data",
  },
];

const point = [
  { id: 1, title: "10 billion+", text: "Calls per month" },
  { id: 2, title: "70+", text: "Endpoints" },
  { id: 3, title: "10 years+", text: "Historical data" },
];

const blogs = [
  {
    id: 1,
    title: "What is cryptocurrency?",
    text: "Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. ",
  },
  {
    id: 2,
    title: "Effects of crypto in life",
    text: "Cryptocurrencies have changed the way people transact digitally. In crypto transactions, no tangible money is exchanged. Instead, financial transactions take place as digital entries to an online database that identify specific transactions. Cryptocurrency transactions are faster and more secure, allowing users to transact without the need of an intermediary financial institution such as a bank.But, is cryptocurrency secure? The growing popularity of cryptocurrencies has made crypto companies, exchanges, and wallets, an attractive target for cybercriminals. As a result there is a greater emphasis on elevating cybersecurity cryptocurrency to ensure protection for associated platforms and the uses.",
  },
];

export { navBar, price, currencyValue, options, point, blogs };
