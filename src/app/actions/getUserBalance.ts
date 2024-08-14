'use server'
import { db } from "../../../lib/db"
import { auth } from "@clerk/nextjs/server";

interface BalanceResult {
    balance?: number
    error?: string
}
async function getUserBalance(): Promise<BalanceResult> {
    const { userId } = auth();

    if (!userId) return {error: 'User not found'}

    try {
        const transaction = await db.transaction.findMany({
            where: {
                userId
            }
        });
        const balance = transaction.reduce((total, transaction) => total + transaction.amount, 0);
        return {balance};
        
    } catch (error) {
        return { error: 'Something went wrong' }
    }
}

export default getUserBalance;