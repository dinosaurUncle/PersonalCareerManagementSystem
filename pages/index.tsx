import Layout from '../components/Layout'
import CardComponentList from "../components/CardComponentList";
import styles from '../styles/Home.module.css'
import React from "react";
import {NextPage} from 'next';
import {Provider, connect, useSelector} from 'react-redux';
import {wrapper, State} from '../components/store';
class IndexPage extends React.Component {

    render(){
        const { ...props } = this.props;
        console.log(props);
        return (
            <Layout {...props} title="Home | Next.js + TypeScript Example" isStyle={true}>
                <button onClick={reduxtExecute}>redux-execute</button>
                <div className={styles.container} style={{marginTop: "40px"}}>
                    <h2 className={styles.title}>등록된 이력 리스트</h2>
                    <Page/>
                    <CardComponentList {...props} />
                </div>
            </Layout>)
    }
}

const Page: NextPage = () => {
    const {tick} = useSelector<State, State>(state => state);
    return (
        <div>{tick}</div>
    );
};

const reduxtExecute = () =>{
    alert('test');
    wrapper.getServerSideProps(
        ({store, req, res, ...etc}) => {
            console.log('2. Page.getServerSideProps uses the store to dispatch things');
            store.dispatch({type: 'TICK', payload: 'was set in other page'});
        }
    );
}
export default connect(state => state)(IndexPage);