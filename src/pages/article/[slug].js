import { useRouter } from "next/router";
import Data from "../../app/components/data"
import styles from '../../app/page.module.css';

export default function Article() {
    const router = useRouter();
    const slug = router.query.slug;
    const articleData = Data.find((val) => val.id === slug);

    if(!articleData) return null; // this is called an early return
    return (
        <main className={styles.page}>
            <div className={styles.introCont}>
                <h1>{articleData.title}</h1>
                <p className={styles.articleDate}>{new Date(articleData.publishedDate).toDateString()}</p>
                <p className={styles.articleBlurb}>{articleData.blurb}</p>
            </div>
            <div>
                <p className={styles.articleTxt}>{articleData.articleText.map((text) => (<p>{text.data}</p>))}</p>
            </div>
        </main>
    );
}
