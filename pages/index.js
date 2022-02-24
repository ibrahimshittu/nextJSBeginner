import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import ArticleStyle from '../styles/Article.module.css'


export default function Home({articles}) {
  return (
    console.log(articles),
    <div>
      <Head>
        <title>Web Dev news</title>
        <meta name="keywords" content='web development for beginners'/>
      </Head>

      <ArticleList articles={articles}/>

      {/* {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>))
      } */}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  const articles = await res.json()
  return {
    props: {articles}
  }
}