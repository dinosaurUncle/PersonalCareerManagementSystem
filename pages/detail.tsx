import {Container, Row, Tabs, Tab,} from 'react-bootstrap';
import Layout from '../components/Layout'
import React from "react";
class DetailPage extends React.Component {

    render(){
        const { ...props } = this.props;
        return (
            <Layout {...props} title="Home | Next.js + TypeScript Example" isStyle={false}>

                <Container style={{padding:"1rem", border:" solid #ececec", borderRadius: "8px"}}>
                    <Row>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Home">

                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                            </Tab>
                            <Tab eventKey="contact" title="Contact" >

                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </Layout>)
    }
}

export default DetailPage;