import Head from "next/head";
import styles from "../styles/Home.module.css";
import Anime from "../pages/anime/animes";
import Image from "next/image";
export default function Home() {
  const loader = ({ src, width }) => {
    return `https://downloadwap.com/thumbs2/${src}?w=${width}`;
  };
  const loader2 = ({ src, width }) => {
    return `https://assets-prd.ignimgs.com/${src}?w=${width}`;
  };
  const redTop = () => {
    window.location = "/anime/top-anime";
  };
  const redSearch = () => {
    window.location = "/anime/anime-search";
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>ANANI</title>
      </Head>
      <div className={styles.c} onClick={redSearch}>
        <div className={styles.img}>
          <Image
            loader={loader}
            src="wallpapers/p2ls/2019/anime/38/92b36ca913377787.jpg"
            layout="fill"
          />
          <div className={styles.title}>Discover anime</div>
        </div>
      </div>

      <div className={styles.c2}>
        <div className={styles.img} onClick={redTop}>
          <Image
            loader={loader2}
            src="2022/08/17/top25animecharacters-blogroll-1660777571580.jpg"
            layout="fill"
          />
          <div className={styles.title}>Top anime</div>
        </div>
      </div>
    </div>
  );
}
