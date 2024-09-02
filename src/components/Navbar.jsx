import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import arrow from "../assets/arrow_icon.png";

import { currencyValue, navBar } from "../constants/constants";

import styles from "../styles/Navbar.module.css";

const Navbar = ({ setCurrency }) => {
  const navigate = useNavigate();


  
  const changeHandler = (e) => {
    const currency = e.target.value;
    switch (currency) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "jpy":
        setCurrency({ name: "jpy", symbol: "¥" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
    }
  };

  const pathHandler = (event) => {
    const path = event.target.innerText.toLowerCase();

    navigate(`/${path}`);
  };

  return (
    <div className={styles.navbar}>
      <Link to="/cryptoplace">
        <img src={logo} alt="logo" />
      </Link>

      <ul>
        {navBar.map((item) => (
          <li key={item.id} onClick={pathHandler}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className={styles.right}>
        <select onChange={changeHandler}>
          {currencyValue.map((item) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <button>
          Sing up
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
