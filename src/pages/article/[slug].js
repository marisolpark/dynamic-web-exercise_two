import { useRouter } from "next/router";
import "../../app/globals.css"
import Data from "../../app/components/data"
import styles from '../../app/page.module.css';

export default function Article() {
    const router = useRouter();
    const slug = router.query.slug;
    const articleData = Data.find((val) => val.id === slug);

    if(!articleData) return null; // this is called an early return
    return (
        <main className={styles.page}>
            <div className={styles.articleHeader} style={{backgroundImage: `url('${articleData.image.url}')`}}>
                <div className={styles.articleWrapper}>
                    <h1>{articleData.title}</h1>
                    <p className={styles.articleDate}>{new Date(articleData.publishedDate).toDateString()}</p>
                    <p className={styles.articleBlurb}>{articleData.blurb}</p>

                </div>
            </div>
            <div>
                <div className={styles.articleTxt}>

                    {articleData.articleText.map((text) => {
                            switch(text.type) {
                                case 'p':
                                    return <p>{text.data}</p>
                                case 'h2':
                                    return <h2>{text.data}</h2>
                                default:
                                    return <p>{text.data}</p>
                            }
                        })}

                    </div>
            </div>
        </main>
    );
}
