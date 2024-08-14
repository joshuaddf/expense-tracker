import getIncomeExpense from "@/app/actions/getIncomeExpense"
import addComma from "../../lib/util";
addComma
const IncomeExpense = async () => {

    const { income, expense } = await getIncomeExpense();

    return (
        <div className="flex justify-between mt-4 p-4 bg-white shadow-md rounded-lg">
            <div className="w-1/2 text-center border-r">
                <h4 className="text-xl font-semibold text-green-500">Income</h4>
                <p className="mt-2 text-2xl font-bold text-green-600">&#x20B5;{addComma(Number(income?.toFixed(2)))}</p>
            </div>
            <div className="w-1/2 text-center">
                <h4 className="text-xl font-semibold text-red-500">Expense</h4>
                <p className="mt-2 text-2xl font-bold text-red-600">&#x20B5;{addComma(Number(expense?.toFixed(2)))}</p>
            </div>
        </div>
    )
}

export default IncomeExpense