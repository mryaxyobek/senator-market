import React from 'react';
import AccountCard from '../components/AccountCard';

const AllAccounts = () => {
    return (
        <section>
            <div className="container py-10">
                <h2 className="section-header_title">Barcha Akkauntlar</h2>

                <ul className="accounts-grid mt-10">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(account => <AccountCard key={account} />)
                    }
                </ul>
            </div>
        </section>
    )
};

export default AllAccounts;