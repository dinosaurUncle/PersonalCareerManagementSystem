import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
    <Layout theme="rtl" title="About | Next.js + TypeScript Example" isStyle={true}>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)

export default AboutPage