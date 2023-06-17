"use client";
import React, {useCallback, useState} from "react";
import Modal from "@/app/components/Modals/Modal";
import UseRegistrationModal from "@/app/hooks/UseRegistrationModal";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Inputs/Input";
import Button from "@/app/components/Button";
import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai";
import {useRouter} from "next/navigation";
import loginModal from "@/app/components/Modals/LoginModal";
import UseLoginModal from "@/app/hooks/UseLoginModal";
import toast from "react-hot-toast";
import {signIn} from "next-auth/react";

const RegistrationModal = () => {
    const router = useRouter();
    const registrationModal = UseRegistrationModal();
    const loginModal = UseLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post("/api/register", data)
            .then(() => {
                toast.success("Registration successful");
                registrationModal.onClose();
                loginModal.onOpen();
            })
            .catch(() => {
                toast.error("Registration failed");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const toggle = useCallback(() => {
        registrationModal.onClose();
        loginModal.onOpen();
    }, [registrationModal, loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-y-4">
            <Heading title="Welcome to Home Zone" subtitle="Your home, our comfort"/>
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" type="password" label="Password" register={register} errors={errors} required/>
        </div>
    );

    const footerContent = (
        <div className="flex flex-col items-center gap-y-2">
            <Button label="Signup with Google" onClick={() => signIn("google")} icon={FcGoogle}/>
            <Button label="Signup with GitHub" onClick={() => signIn("github")} icon={AiFillGithub}/>

            <div className="flex items-center gap-x-2">
                <span>Already have an account?</span>
                <span onClick={toggle} className="font-semibold hover:underline cursor-pointer">Log in</span>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={registrationModal.isOpen}
            onClose={registrationModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            title="Register"
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegistrationModal;
