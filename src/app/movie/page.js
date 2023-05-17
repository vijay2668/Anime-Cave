
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e7024e2469msh83b1c09b9bc7df4p108576jsn509c56599052",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com"
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.data;
  console.table(main_data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem._id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
