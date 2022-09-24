import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Top-anime.module.css";
export const getServerSideProps = async () => {
  const data = await Axios.get("https://api.jikan.moe/v4/top/anime");

  return {
    props: {
      genre: data.data,
    },
  };
};

const TopAnime = ({ genre }) => {
  return (
    <div>
      <div className={styles.grid_container}>
        <div className={styles.grid_rank}>rank</div>
        <div className={styles.grid_title}>title</div>
        <div className={styles.grid_score}>score</div>
        {genre.data.map((value, key) => {
          return (
            <>
              <div key={key} className={styles.rank}>
                {value.rank}
              </div>
              <div className={styles.title_zoon}>
                <div className={styles.img}>
                  <img src={value.images.jpg.image_url} />
                </div>
                <div className={styles.title}>
                  <Link href={`/animeprofile/${value.mal_id}`}>
                    {value.title}
                  </Link>
                  <div className={styles.details}>
                    <div>
                      {value.type} ({value.episodes})
                    </div>
                    <div>{value.aired.string}</div>
                  </div>
                </div>
              </div>
              <div className={styles.score}>{value.score}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default TopAnime;
