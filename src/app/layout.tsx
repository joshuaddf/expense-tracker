import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs"
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Container from "@/components/Container"
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses and create a budget with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Header />
          <Container>
          {children}
          </Container>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
