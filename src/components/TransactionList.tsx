import React from 'react';
import { Transaction } from '../../Types/Transaction';
import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';

const TransactionList = async () => {
    const { transactions, error } = await getTransactions();

    if (error) return <p className="text-red-600">Error: {error}</p>;

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Transaction History</h3>
            {transactions && transactions.length > 0 ? (
                <ul className="space-y-4">
                    {transactions.map((transaction: Transaction) => (
                       <TransactionItem key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No transactions available.</p>
            )}
        </div>
    );
}

export default TransactionList;
