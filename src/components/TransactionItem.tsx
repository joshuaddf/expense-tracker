'use client'

import React from 'react'
import { Transaction } from '../../Types/Transaction'
import addComma from '../../lib/util'
import { toast } from 'react-toastify';
import deleteTransaction from '@/app/actions/deleteTransaction';
import { FiTrash } from 'react-icons/fi'; 

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {

    const handleDeleteTransaction = async (transactionId: string) => {
        const confirmed = window.confirm('Are you sure you want to delete this transaction?');
        if (!confirmed) return;

        const { message, error } = await deleteTransaction(transactionId);

        if (error) {
            toast.error(error);
            return;
        }

        toast.success(message);
    };

    return (
        <li
            className={`relative p-4 rounded-lg border ${transaction.amount < 0 ? 'border-red-300 bg-red-50 text-red-700' : 'border-green-300 bg-green-50 text-green-700'} hover:shadow-md transition-shadow duration-200 group`}
        >
            <div className="flex justify-between items-center">
                <span className="font-medium">{transaction.text}</span>
                <span className={`font-bold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {transaction.amount < 0 ? `-₵${addComma(Math.abs(transaction.amount))}` : `+₵${addComma(transaction.amount)}`}
                </span>
            </div>
            <button
                onClick={() => handleDeleteTransaction(transaction.id)}
                className='absolute top-0 rounded-lg -left-8  bg-red-500 p-2 xl:group-hover:opacity-100 xl:opacity-0 transition-all duration-200'
            >
                <FiTrash size={20} className='text-white'/> 
            </button>
        </li>
    );
};

export default TransactionItem;
