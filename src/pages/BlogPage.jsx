import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import { blogs } from "../constants/constants";

import styles from "../styles/BlogPage.module.css";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.blogs}>
        {blogs.map((blog) => (
          <div  className={styles.blog} key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default BlogPage;
