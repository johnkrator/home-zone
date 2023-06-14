"use client";
import React from "react";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    return (
        <div
            className="flex flex-row items-center text-sm gap-3 shadow-md rounded-full px-10 py-2 hover:shadow-lg transition cursor-pointer whitespace-nowrap">
            <div>
                <h3>Any where</h3>
            </div>
            <div className="md:block hidden">
                <h3>Any week</h3>
            </div>
            <div className="relative flex items-center">
                <h3 className="md:block hidden">Any guest</h3>
                <BsSearch className="absolute md:top-1 md:left-20 -top-1.5 left-3"/>
            </div>
        </div>
    );
};

export default Search;
