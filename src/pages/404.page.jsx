import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/404.page.module.css";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.notfound}>
        <h1>This Page Not Found!</h1>
        <Link to="/cryptoplace">
          <button>Go Home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
