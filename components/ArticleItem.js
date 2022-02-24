import Link from 'next/link'
import ArticleStyles from '../styles/Article.module.css'

function ArticleItem({ article }) {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
        <a className={ArticleStyles.card}>
       
            <h3 key={article.id}>{article.title} &rarr;</h3>
            <p>{article.body}</p>
        </a>
    </Link>
  )
}

export default ArticleItem