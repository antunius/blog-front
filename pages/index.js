import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import getAllPostIds, {getAllPosts} from '../lib/article'
import Link from 'next/link'
export default function Home({articles}) {
    console.log(articles)
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <ul>
                    {articles.map(p => (
                        <li className={utilStyles.listItem} key={p.id}>
                            <Link href={'/articles/' + p.id}>
                                <a>{p.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}
Home.getInitialProps = async ({req}) => {
    const res = await getAllPosts();
    const json = await res.json();
    console.log(json);
    return {
        articles: json

    }
}

