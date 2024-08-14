'use server'
import { db } from "../../../lib/db"
import { auth } from "@clerk/nextjs/server";
import { Transaction } from "../../../Types/Transaction";

interface TransactionResult {
    transactions?: Transaction[]
    error?: string
}
async function getTransactions(): Promise<TransactionResult> {
    const { userId } = auth();

    if (!userId) return {error: 'User not found'}

    try {
        const transactions = await db.transaction.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return {transactions};
        
    } catch (error) {
        return { error: 'Something went wrong' }
    }
}

export default getTransactions;