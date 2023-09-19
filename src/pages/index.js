import styles from '../app/page.module.css';
import Data from '../app/components/data';
import ArticleCard from '../app/components/ArticleCard';

export default function Home() {
  const projectName = "Exersice Two"
  console.log(Data); //remember to DELETE THIS!!!!!!!
  return (
    <main>
        <h1>{projectName}</h1>
        <ArticleCard title='Cool Title' description='A cool description'/>
        <ArticleCard title='Another Title'/>
        <ArticleCard/>
    </main>
  )
}
