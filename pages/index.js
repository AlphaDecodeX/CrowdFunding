import React, { Component } from 'react';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import CampaignFactory from '../ethereum/build/CampaignFactory.json'
import Web3 from "web3";
import { useState, useEffect } from 'react';

export default function CampaignIndex() {
    useEffect(() => {
        async function start() {
            window.ethereum.request({ method: "eth_requestAccounts" });
            const web3 = new Web3(window.ethereum);

            const instance = new web3.eth.Contract(
                JSON.parse(CampaignFactory.interface),
                '0x2C96c85711AA3a3393F72a688527CC44f61372a0'
            );

            const campaigns = await instance.methods.getDeployedCampaigns().call();
            console.log(campaigns);
        }
        start();

    }, []);

    return <div>Campaign Index Page.....</div>

};