import Link from 'next/link'
import Layout from '../components/Layout'
import CardComponentList from "../components/CardComponentList";

import styles from '../styles/Home.module.css'
const IndexPage = () => (
    <Layout theme="rtl" title="Home | Next.js + TypeScript Example">
        <div className={styles.container}>
            <h1 className={styles.title}>Hello Next.js</h1>
                <CardComponentList/>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default IndexPage