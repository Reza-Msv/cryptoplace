import { useEffect, useState } from "react";
import styles from "../styles/SearchBox.module.css";

import { getCoin } from "../services/service";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(getCoin(search))
      .then((res) => res.json())
      .then((json) => setDisplay(json.coins));
  }, [search]);

  return (
    <div className={styles.searchbox}>
      <input
        type="text"
        placeholder="Type to search"
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />

      {search && (
        <div className={styles.searchresult}>
          <ul>
            {display?.map((item) => (
              <Link key={item.id} to={`/coin/${item.id}`}>
                <li>
                  <img src={item.thumb} alt="" />
                  <p>{item.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
