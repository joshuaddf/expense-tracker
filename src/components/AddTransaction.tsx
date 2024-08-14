'use client'
import submitTransaction from '@/app/actions/submitTransaction';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');
    const [amount, setAmount] = useState<number | string>('');

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setAmount(transactionType === 'expense' ? -Math.abs(value) : Math.abs(value));
    };

    const clientAction = async (formData: FormData) => {
        const { data, error } = await submitTransaction(formData);
        if (error) {
            toast.error(error);
        } else {
            toast.success('Transaction added');
            console.log(data);
            formRef.current?.reset();
            setAmount('');
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6">Add Transaction</h3>
            <form ref={formRef} action={clientAction} className="space-y-6">
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">Transaction Type</label>
                    <div className="flex items-center space-x-4 mb-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value="income"
                                checked={transactionType === 'income'}
                                onChange={() => setTransactionType('income')}
                                className="mr-2"
                            />
                            Income
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value="expense"
                                checked={transactionType === 'expense'}
                                onChange={() => setTransactionType('expense')}
                                className="mr-2"
                            />
                            Expense
                        </label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="text" className="mb-2 font-medium text-gray-700">Text</label>
                    <input
                        type="text"
                        name="text"
                        placeholder="Transaction name..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="amount" className="mb-2 font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={amount}
                        placeholder="Enter amount"
                        step="0.01"
                        onChange={handleAmountChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default AddTransaction;
