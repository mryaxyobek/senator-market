import React from 'react';
import Hero from '../components/Hero';
import TopAccounts from '../components/TopAccounts';
import UcSection from '../components/UcSection';
import Accounts from '../components/Accounts';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <TopAccounts />
            <UcSection />
            <Accounts />
            <Contact />
        </>
    )
};

export default Home;