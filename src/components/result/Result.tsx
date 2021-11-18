import React, { FunctionComponent, ReactElement, useState } from "react";
import { Album } from "../../generated/graphql";
import { ResultProps, AlbumState } from "../../types";
import styles from "./Result.module.css";

const Result: FunctionComponent<ResultProps> = ({ data }): ReactElement => {
  const [album, setAlbum] = useState<AlbumState>({albums: [], artist: ''});
  const [style, setStyle] = useState<number>();

  return (
    <section className={styles.mainContainer}>
      <h2>Search Result</h2>
      <section className={styles.resultContainer}>
        <section className={styles.artistsResult}>
          {data.queryArtists?.map((art, ind: number) => (
            <div
              className={`${styles.actualResult} ${
                style === ind ? styles.actualResultClicked : ""
              }`}
              onClick={() => {
                setAlbum({albums: art?.albums as Album[], artist: art?.name!});
                setStyle(ind);
                window.scroll({top:0,behavior:'smooth'})
              }}
              key={`${ind}-${art?.id}`}
            >
              <h3>{art?.name}</h3>
              <img src={art?.image!} width={120} alt={art?.name} />
            </div>
          ))}
        </section>
        <div className={styles.albumContainer}>
          <h3>{album.artist && `${album.artist}'s`} Album Lists</h3>
          <section className={styles.albumsResult}>
            {album &&
              album.albums.map((alb, i) => (
                <div
                  key={`${i}-${alb.id}`}
                  className={styles.subResult}
                >
                  <img src={alb.image!} alt={alb.name!} />
                  <p>
                    {alb.name?.length! <= 45
                      ? alb.name
                      : `${alb.name?.slice(0, 45)} ...`}
                  </p>
                </div>
              ))}
          </section>
        </div>
      </section>
    </section>
  );
};

export default Result;
