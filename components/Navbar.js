import Axios from "axios";
import App from "next/app";
import Link from "next/link";
import { useState } from "react";
import MyApp from "../pages/_app";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/">
          <p className={styles.text}>home</p>
        </Link>
        <Link href="/anime/animes">
          <p className={styles.text}>All anime</p>
        </Link>
        <Link href="/anime/top-anime">
          <p className={styles.text}>top anime</p>
        </Link>

        <Link href="/anime/anime-search">
          <p className={styles.text}>search an anime</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
