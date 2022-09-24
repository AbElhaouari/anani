import Axios from "axios";
import YouTube from "react-youtube";
import styles from "../../styles/Anime-profile.module.css";

export const getServerSideProps = async ({ params }) => {
  const data = await Axios.get(
    `https://api.jikan.moe/v4/anime/${params.title}`
  );
  return {
    props: {
      animes: data.data,
    },
  };
};
export default function AnimeDetails({ animes }) {
  const opt = {
    height: "300",
    width: "600",
  };
  return (
    <div>
      {console.log(animes)}
      <h2 className={styles.title}>{animes.data.title}</h2>
      <div className={styles.wrapper}>
        <div className={styles.container1}>
          <img src={animes.data.images.jpg.image_url} />
          <h5>Alternative titles </h5>
          <div>japanese : {animes.data.title}</div>
          <div>English : {animes.data.title_japanese}</div>
          <h5>Information</h5>
          <div>Type : {animes.data.type}</div>
          <div>Episodes : {animes.data.episodes}</div>
          <div>Status : {!animes.data.airing ? "finished" : "airing"} </div>
          <div>Producers : {animes.data.producers.map((v) => v.name)}</div>
          <div>Source : {animes.data.source}</div>
          <div>
            Genres :{" "}
            {animes.data.genres.map((v) => {
              return (
                <>
                  <div>{v.name},</div>
                </>
              );
            })}
          </div>
          <div>Duration : {animes.data.duration}</div>
        </div>

        <div className={styles.container2}>
          <div className={styles.items}>
            <div>
              Score <div>{animes.data.score}</div>
            </div>
            <div>
              Rank <div>{animes.data.rank}</div>
            </div>
            <div>
              Popularity <div>{animes.data.popularity}</div>
            </div>
            <div>
              Members <div>{animes.data.members}</div>
            </div>
          </div>
        </div>

        <div className={styles.youtube}>
          <div className={styles.vid}>
            <YouTube opts={opt} videoId={animes.data.trailer.youtube_id} />
          </div>
          <div className={styles.syn}>Synopsis : {animes.data.synopsis}</div>
        </div>
      </div>
    </div>
  );
}
