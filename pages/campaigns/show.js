import React, { Component } from 'react';
import Layout from '../../components/Layout';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
        return null;
    }

    render() {
        <Layout>
            <h3>This is the Show page</h3>
        </Layout>
    }
}

export default CampaignShow;