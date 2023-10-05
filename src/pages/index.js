import styles from '../app/page.module.css';
import Data from '../app/components/data';
import ArticleCard from '../app/components/ArticleCard';

export default function Home() {
  const projectName = "Article (Exercise Two)"
  return (
    <main className={styles.page}>
        <h1 className={styles.mainTitle}>{projectName}</h1>
        {Data.map ((article) => (
          <ArticleCard 
          key={article.id}
          title={article.title}
          date={new Date(article.publishedDate).toDateString()}
          description={article.blurb}
          id={article.id}
          imageSrc={article.image.url}
          imgAlt={article.image.alt}/>
        ))}
    </main>
  )
}
