"use client";
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {BiSun} from "react-icons/bi";
import {IoMdMoon} from "react-icons/io";

const ThemeButton = () => {
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? (<BiSun size={15}/>) : (<IoMdMoon size={15}/>)}
        </button>
    );
};

export default ThemeButton;
