import Image from "next/image";
import React from "react";
import styles from "@/app/styles/common.module.css"

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e7024e2469msh83b1c09b9bc7df4p108576jsn509c56599052',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
         <span> {main_data.type} </span>
      </h2>
      <div className={styles.card_section}>
        <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <Image
          style={{width:"auto", borderRadius:"1rem"}}
            src={main_data.image}
            alt={main_data.title}
            width={600}
            height={400}
          />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
