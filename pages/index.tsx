import Link from 'next/link'
import Layout from '../components/Layout'
import CardComponentList from "../components/CardComponentList";
import { createStyles, WithStyles, withStyles} from '@material-ui/core/styles';

import styles from '../styles/Home.module.css'
import React from "react";




const useStyles = () =>
    createStyles({

    });

export interface IndexPageProps extends WithStyles<typeof useStyles> {
}

class IndexPage extends React.Component<IndexPageProps> {

    render(){
        return (
            <Layout title="Home | Next.js + TypeScript Example">
                <div className={styles.container}>
                    <h2 className={styles.title}>등록된 이력 리스트</h2>
                    <CardComponentList/>
                    <p>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </p>
                </div>
            </Layout>)
    }
}

export default withStyles(useStyles)(IndexPage);