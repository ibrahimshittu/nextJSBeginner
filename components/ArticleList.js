import ArticleStyles from '../styles/Article.module.css'

function ArticleList({ articles }) {
  return (
    <div className={ArticleStyles.grid}>
        {articles.map(article => 
            <h3 key={article.id}>{article.title}</h3>)}
    </div>
  )
}

export default ArticleList