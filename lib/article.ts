export function getSortedPostsData() {
}

export class Article {
    id: number;
    title: string;
    body: string;
    author: number;
    create_at: Date;
    updated_at: Date

}

export function getAllPosts() {
    return fetch('http://localhost:8000/article/')
}

export default function getAllPostIds() {
    return fetch('http://localhost:8000/article/')
        .then(value => value.json())
        .then<Article[]>(articles => articles.map((article) => {
                return {
                    params: {
                        id: article.id.toString()
                    }
                }
            }
        ))
}

export function getPostData(id) {
    return fetch('http://localhost:8000/article/'+ id)
        .then(value => value.json())
        .then<Article>(article => {
            return {
                id,
                ...article
            }
        })

}
