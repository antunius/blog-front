import Layout from "../../components/layout";
import getAllPostIds, {getPostData} from "../../lib/article";
import Head from "next/head";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default function Article({article}) {
    return (
        <>
            <Head>
                <title>{article.title}</title>
            </Head>
            <Layout>
                <h1>{article.title}</h1>
                <p>{article.create_at}</p>
                <div dangerouslySetInnerHTML={{__html: article.body}}/>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const article = await getPostData(params.id)
    console.log(article)
    return {
        props: {
            article
        }
    }
}

export async function getInitalProps({params}) {
    const res = await getPostData(params.id)
    const json = await res.json()
    return {propsarticle: json[0]}
}
