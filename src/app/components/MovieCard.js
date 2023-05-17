import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {
  const { _id, type, title, synopsis } = curElem;

  return (
    <>
      <div className="card">
        <div className={styles.card_image}>
          <Image src={curElem.image} alt={title} width={260} height={200} />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>{`${synopsis.substring(0, 66)} ...`}</p>
        </div>
        <Link href={`/movie/${_id}`}>
          <button class="card-button">More info</button>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
