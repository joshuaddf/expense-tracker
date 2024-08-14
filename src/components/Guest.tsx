import { SignInButton, SignUpButton } from "@clerk/nextjs";


const Guest = () => {
    return (
        <div className="flex flex-col justify-center mt-20 items-center h-[60%]">
            <h1 className="text-5xl font-bold tracking-wide">Welcome</h1>
            <p className="py-6 text-2xl text-center ">Sign up to manage your expenses.</p>
            <div className="flex flex-row items-center gap-4">
                {/* <div className="bg-purple-700 hover:bg-purple-900 hover:text-white/55 font-bold text-white tracking-wide rounded-lg px-5 py-1">
                    <SignInButton mode="modal" />
                </div> */}
                <div className="bg-purple-700 hover:bg-purple-900 hover:text-white/55 font-bold text-white tracking-wide rounded-lg px-5 py-1">
                    <SignUpButton fallbackRedirectUrl="/" mode="modal" />
                </div>
            </div>
        </div>
    );
}

export default Guest;