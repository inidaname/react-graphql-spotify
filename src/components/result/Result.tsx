import React, { FunctionComponent, ReactElement, useState } from "react";
import { Album, Artist, Track } from "../../generated/graphql";
import { ResultProps } from "../../types";
import styles from './Result.module.css';

const Result: FunctionComponent<ResultProps> = ({ data }): ReactElement => {
  const [state, setState] = useState<Album[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  return (
    <>
      <h2>Search Result</h2>
      {data.queryArtists?.map((art, ind: number) => (
        <div
          className={styles.actualResult}
          onClick={() => setState(art?.albums as Album[])}
          key={`${ind}-${art?.id}`}
        >
          {art?.name}
        </div>
      ))}
      {state &&
        state.map((alb, i) => (
          <div
            key={`${i}-${alb.id}`}
            className={styles.subResult}
            onClick={() => setTracks(alb.tracks as Track[])}
          >
            {alb.name}
          </div>
        ))}
      {state && tracks && tracks.map((track) => <div>{track.name}</div>)}
    </>
  );
};

export default Result;
