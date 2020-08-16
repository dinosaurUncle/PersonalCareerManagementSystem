import Layout from '../components/Layout'
import CardComponentList from "../components/CardComponentList";
import styles from '../styles/Home.module.css'
import React from "react";

class IndexPage extends React.Component {

    render(){
        const { ...props } = this.props;
        console.log(props);
        return (
            <Layout {...props} title="Home | Next.js + TypeScript Example" isStyle={true}>
                <div className={styles.container} style={{marginTop: "40px"}}>
                    <h2 className={styles.title}>등록된 이력 리스트</h2>
                    <CardComponentList {...props} />
                </div>
            </Layout>)
    }
}

export default IndexPage;