import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaigns';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (Wei)',
                description: 'You have to contribute atleast this much'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contributers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of People who donated already'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance (ether)',
                description: 'Amount of money donated till now...'
            }
        ];

        return <Card.Group items={items} />

    }

    render() {
        return <Layout>
            <h3>This is the Show page</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    }
}

export default CampaignShow;