import Axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/anime-search.module.css";
export const getServerSideProps = async ({ props }) => {
  const data = await Axios.get(`https://api.jikan.moe/v4/anime`);

  return {
    props: {
      genre: data.data,
    },
  };
};
const linkToAnime = (id) => {
  window.location = "/animeprofile/" + id;
};
const AnimeSearch = ({ genre }) => {
  const [search, setSearch] = useState();

  return (
    <div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.container}>
        {genre.data
          .filter((v) => {
            if (search == "") {
              return "";
            } else if (v.title.toLowerCase().toString().includes(search)) {
              return v;
            }
          })
          .map((val, key) => {
            return (
              <div
                key={key}
                className={styles.item}
                onClick={() => {
                  linkToAnime(val.mal_id);
                }}
              >
                <div className={styles.title}>{val.title}</div>

                <div className={styles.img}>
                  <Image
                    width={300}
                    height={400}
                    className={styles.img}
                    src={val.images.jpg.image_url}
                  />
                </div>
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
};

export default AnimeSearch;
