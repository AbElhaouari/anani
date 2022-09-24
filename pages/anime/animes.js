import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Animes.module.css";
export const getServerSideProps = async () => {
  const data = await Axios.get("https://api.jikan.moe/v4/anime");
  return {
    props: {
      animes: data.data,
    },
  };
};
const Anime = ({ animes }) => {
  return (
    <div className={styles.grid_container}>
      {console.log(animes.data)}
      {animes.data.map((anime, key) => {
        return (
          <div key={key} className={styles.grid_item}>
            <div className={styles.title}>
              <Link href={`/animeprofile/${anime.mal_id}`}>{anime.title}</Link>
            </div>
            <div>
              <p className={styles.airing}>
                {!anime.airing ? "Fnished" : "Airing"} | episodes{" "}
                {anime.episodes} , {anime.duration}
              </p>
            </div>
            <div>
              <Image
                width={300}
                height={300}
                className={styles.img}
                src={anime.images.jpg.image_url}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Anime;
