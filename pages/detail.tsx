import Link from 'next/link'
import Layout from '../components/Layout'
import CardComponentList from "../components/CardComponentList";
import styles from '../styles/Home.module.css'
import React from "react";

class DetailPage extends React.Component {

    render(){
        const { ...props } = this.props;
        console.log(props);
        return (
            <Layout {...props} title="Home | Next.js + TypeScript Example">
                <div className={styles.container}>
                    <h2 className={styles.title}>등록된 이력 리스트</h2>
                    <CardComponentList {...props} />
                    <p>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </p>
                </div>
            </Layout>)
    }
}

export default DetailPage;