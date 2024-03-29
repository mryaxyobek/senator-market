import React from 'react';
import { Link } from 'react-router-dom';

// card
import AccountCard from './AccountCard';
const Accounts = () => {
    return (
        <section className='section'>
            <div className="container section-content">
                <div className="section-header">
                    <h2 className="section-header_title">Akkauntlar</h2>
                    <Link className="section-header_link" to='/'>Barcha top akkauntlar</Link>
                </div>
                <ul className="accounts-grid">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(account => <AccountCard key={account} />)
                    }
                </ul>
                <Link className="section-footer_link" to='/'>Barcha akkauntlar</Link>
            </div>
        </section>
    )
};

export default Accounts;