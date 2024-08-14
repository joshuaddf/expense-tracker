import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

export default async function Home() {

  const user = await currentUser();

  if (!user) {
    return <Guest />
  }

  return (
   <main>
    <h1 className="text-2xl font-bold pt-5 text-center">
     Hello, {user.firstName} 👋🏻
    </h1>
    <Balance />
    <IncomeExpense />
    <AddTransaction />
    <TransactionList />
   </main>
  );
}
