import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            <span className={footerStyles.logo_name}>Vijay Singh Rathod</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="#" style={{display:"grid", placeItems:"center"}}> <FaFacebookF/> </Link>
                            <Link href="https://twitter.com/rathodvijay2410" target="_blank" style={{display:"grid", placeItems:"center"}}> <FaTwitter/> </Link>
                            <Link href="#" style={{display:"grid", placeItems:"center"}}> <FaInstagram/>  </Link>
                            <Link href="#" style={{display:"grid", placeItems:"center"}}> <FaLinkedinIn /> </Link>
                            <Link href="#" style={{display:"grid", placeItems:"center"}}> <FaYoutube />  </Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/movie">Explore Movies & Series</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> Vijay Singh Rathod.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;