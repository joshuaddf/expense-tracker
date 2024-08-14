import getUserBalance from "@/app/actions/getUserBalance";
import addComma from "../../lib/util";
const Balance = async () => {

    const {balance} = await getUserBalance();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center pt-6">
      <h4 className="text-lg font-medium text-gray-600">Your Balance</h4>
      <h1 className="text-4xl font-bold text-green-600 mt-2">&#x20B5;{ addComma( Number( balance?.toFixed(2)) ?? 0 )}</h1>
    </div>
  )
}

export default Balance
