import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import checkUser from "../../lib/checkUser";


const Header = async () => {

    const user = await checkUser();

    return (
        <header className="flex items-center justify-between lg:px-8 md:px-6 px-4 py-5 bg-zinc-900">
            <h2 className="text-white font-semibold text-lg">Expense Tracker</h2>
            <div className="flex gap-3">
                <SignedOut>
                    <p className="text-white font-semibold hidden lg:block lg:text-lg">Already have an account?</p>
                    <div className="bg-purple-700 hover:bg-purple-900 hover:text-white/55 font-bold text-white tracking-wide rounded-lg px-5 py-1">
                        <SignInButton mode="modal" />
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    )
}

export default Header