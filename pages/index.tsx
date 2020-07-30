import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <div className={styles.container}>
            <h1 className={styles.title}>Hello Next.js</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default IndexPage