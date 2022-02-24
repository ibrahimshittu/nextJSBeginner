import ArticleStyles from '../styles/Article.module.css'
import ArticleItem from '../components/ArticleItem'

function ArticleList({ articles }) {
  return (
    <div className={ArticleStyles.grid}>
        {articles.map(article => 
            <ArticleItem key={article.id} article={article}/>)}
    </div>
  )
}

export default ArticleList