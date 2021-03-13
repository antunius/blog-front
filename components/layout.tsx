import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'
import {Grid} from "@material-ui/core";

const name = 'Marcus Antunius'
export const siteTitle = 'softwareengineering.io'

export default function Layout({children, home}) {
    return (
        <>

            <Head>
                <link rel="icon" href="../public/favicon.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <title>{siteTitle}</title>
            </Head>
            <header className={styles.header}>
                <Grid container className={styles.mainNav}>
                    <div className={styles.contentMenu}>
                        <Grid className={"un-menu-left"}>
                            <Grid className={styles.unMenuItemHolder}>
                                <div className={styles.unNavLink} id="un-nav-Products"
                                     data-target="#un-menu-pane-36">
                                    <a href={"#"} title={"LANGUAGES"}>LANGUAGES</a>
                                </div>
                            </Grid>
                            <Grid className={styles.unMenuItemHolder}>
                                <div className={styles.unNavLink} id="un-nav-Products"
                                     data-target="#un-menu-pane-36">
                                    <a title={"CODE INTERVIEW"} href={"#"}> CODE INTERVIEW</a>
                                </div>
                            </Grid>
                            <Grid className={styles.unMenuItemHolder}>
                                <div className={styles.unNavLink} id="un-nav-Products"
                                     data-target="#un-menu-pane-36">
                                    <a title={"DESIGN SYSTEM"} href={"#"}> DESIGN SYSTEM</a>
                                </div>
                            </Grid>
                            <Grid className={styles.unMenuItemHolder}>
                                <div className={styles.unNavLink} id="un-nav-Products"
                                     data-target="#un-menu-pane-36">
                                    <a title={"NEWS"} href={"#"}>NEWS</a>
                                </div>
                            </Grid>
                            <Grid className={styles.unMenuItemHolder}>
                                <div className={styles.unNavLink} id="un-nav-Products"
                                     data-target="#un-menu-pane-36">
                                    <a title={"AUTHORS"} href={"#"}>AUTHORS</a>
                                </div>
                            </Grid>
                            <Grid className={styles.unMenuItemHolder}>
                                <div className={styles.unNavLink} id="un-nav-Products"
                                     data-target="#un-menu-pane-36">
                                    <a title={"ABOUT US"} href={"#"}>ABOUT US</a>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </header>
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
            <footer className={styles.footer}>
                <p>From Rust with Love</p>
                <img src="https://www.rust-lang.org/logos/rust-logo-32x32-blk.png" alt="Vercel Logo" className={styles.logo}/>

            </footer>
        </>
    )
}
