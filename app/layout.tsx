import "./globals.css";
import {Nunito} from "next/font/google";
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";

const nunito = Nunito({subsets: ["latin"]});

export const metadata = {
    title: "Home Zone",
    description: "Home Zone is a website for the home zone of everyone looking for a place to live.",
    keywords: "home zone, home, zone, place, live, rent, buy, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment, house, apartment"
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={nunito.className}>
        <Navbar/>
        <div className="container py-4">
            {children}
        </div>
        </body>
        </html>
    );
}
