import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4c9e0B6a4da2E33c060493C1fD7A3cFc1f97716D'
);

export default instance;