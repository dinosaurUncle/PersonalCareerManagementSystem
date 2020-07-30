import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
type Props = {
    children?: ReactNode
    title?: string
}

class Layout extends React.Component<Props, any> {
    render() {
        const {children, title = 'This is the default title'} = this.props;
        return (
            <div className={styles.container}>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <header>
                    <nav>
                        <Link href="/">
                            <a>Home</a>
                        </Link>{' '}
                        |{' '}
                        <Link href="/about">
                            <a>{title}</a>
                        </Link>{' '}
                        |{' '}
                        <Link href="/users">
                            <a>Users List</a>
                        </Link>{' '}
                        | <a href="/api/users">Users API</a>
                    </nav>
                </header>
                {children}
                <footer>
                    <hr />
                    <span>I'm here to stay (Footer)</span>
                </footer>
            </div>
        );
    }
}

export default Layout