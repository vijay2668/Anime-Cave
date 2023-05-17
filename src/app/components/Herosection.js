import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})


const Herosection = ({title, imageUrl}) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p> From critically acclaimed anime series to breathtaking animated films, we&apos;ve got you covered. Explore our diverse selection of the latest and greatest anime releases, and discover your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
                    </div>

                    <div className={heroStyles.hero_image}>
                        <Image src="/home1.svg" alt="watching netflix" width={500} height={500}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Herosection;