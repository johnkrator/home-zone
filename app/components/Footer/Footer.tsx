"use client";
import React from "react";
import Container from "@/app/components/Container";
import {AiFillGithub, AiFillInstagram} from "react-icons/ai";
import Link from "next/link";
import {BsFacebook, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <Container>
            <div className="">
                <hr/>

                <div className="py-4 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center md:text-2xl gap-4">
                        <Link href="https://github.com/" target="_blank"><AiFillGithub/></Link>
                        <Link href="https://twitter.com/" target="_blank"><BsTwitter/></Link>
                        <Link href="https://facebook.com/" target="_blank"><BsFacebook/></Link>
                        <Link href="https://instagram.com/" target="_blank"><AiFillInstagram/></Link>
                    </div>

                    <div>
                        &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
