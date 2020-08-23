import React from 'react';
import {NextPage} from 'next';
import {Provider, useSelector} from 'react-redux';
import {wrapper, State} from '../components/store';

export const getStaticProps = wrapper.getStaticProps(
    ({store, preview}) => {
        console.log('2. Page.getStaticProps uses the store to dispatch things');
        store.dispatch({type: 'TICK', payload: 'was set in other page ' + preview});
    }
);

// you can also use `connect()` instead of hooks
const Page: NextPage = () => {
    const {tick} = useSelector<State, State>(state => state);
    return (
        <div>{tick}</div>
    );
};

export default Page;