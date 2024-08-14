'use server'
import { auth } from "@clerk/nextjs/server";
import { db } from "../../../lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
    text: string;
    amount: number;
}

interface TransactionResult {
    data?: TransactionData;
    error?: string;
}

async function submitTransaction(formData: FormData): Promise<TransactionResult> {

    const textValue = formData.get('text');
    const amountValue = formData.get('amount');

    if (!textValue || textValue === '' || !amountValue) {
        return {
            error: 'Text or amount is missing'
        };
    }

    const text: string = textValue.toString();
    const amount: number = parseFloat(amountValue.toString());

    if (isNaN(amount)) {
        return {
            error: 'Amount must be a valid number'
        };
    }

    const { userId } = auth();

    if (!userId) {
        return {
            error: 'User not found'
        };
    }

    try {
        // Assuming you want to return only `text` and `amount`
        const transactionData = await db.transaction.create({
            data: {
                text,
                amount,
                userId
            },
            select: {
                text: true,
                amount: true,
            }
        });

        revalidatePath("/");

        return {
            data: transactionData
        };
    } catch (error) {
        console.error('Error creating transaction:', error);
        return { error: 'Something went wrong while creating the transaction' };
    }
}

export default submitTransaction;
