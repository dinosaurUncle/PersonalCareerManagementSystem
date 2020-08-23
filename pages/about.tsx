import Link from 'next/link'
import Layout from '../components/Layout'
import {NextPage} from "next";
import {useSelector} from "react-redux";
import {State} from "../components/store";
import React from "react";

const AboutPage = () => (
    <Layout theme="rtl" title="About | Next.js + TypeScript Example" isStyle={true}>
        <h1>About</h1>
        <p>This is the about page</p>
        <Page3/>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)
const Page3: NextPage = () => {
    const {tick} = useSelector<State, State>(state => state);
    return (
        <div>{tick}</div>
    );
};
export default AboutPage