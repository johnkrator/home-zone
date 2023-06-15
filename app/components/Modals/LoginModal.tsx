"use client";
import React, {useCallback, useState} from "react";
import Modal from "@/app/components/Modals/Modal";
import UseRegistrationModal from "@/app/hooks/UseRegistrationModal";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Inputs/Input";
import Button from "@/app/components/Button";
import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai";
import UseLoginModal from "@/app/hooks/UseLoginModal";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {signIn} from "next-auth/react";

const LoginModal = () => {
    const router = useRouter();
    const registerModal = UseRegistrationModal();
    const loginModal = UseLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn("credentials", {...data, redirect: false})
            .then((callback) => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success("Logged in successfully!");
                    router.refresh();
                    loginModal.onClose();
                }

                if (callback?.error) {
                    toast.error(callback?.error);
                }
            });
    };

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-y-4">
            <Heading title="Welcome back" subtitle="Continue to your account"/>
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" type="password" label="Password" register={register} errors={errors} required/>
        </div>
    );

    const footerContent = (
        <div className="flex flex-col items-center gap-y-2">
            <Button label="Signup with Google" onClick={() => signIn("google")} icon={FcGoogle}/>
            <Button label="Signup with GitHub" onClick={() => signIn("github")} icon={AiFillGithub}/>

            <div className="flex items-center gap-x-2">
                <span>Don&apos;t have an account?</span>
                <span onClick={toggle} className="font-semibold hover:underline cursor-pointer">Register</span>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={loginModal.isOpen}
            onCLose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            title="Login"
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModal;
