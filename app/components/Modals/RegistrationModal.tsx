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

const RegistrationModal = () => {
    const registrationModal = UseRegistrationModal();
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
                console.log("Success");
                registrationModal.onClose();
                // loginModal.onOpen();
            })
            .catch(() => {
                console.log("Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const toggle = useCallback(() => {
        registrationModal.onClose();
        // loginModal.onOpen()
    }, [registrationModal]);

    const bodyContent = (
        <div className="flex flex-col gap-y-4">
            <Heading title="Welcome to Home Zone" subtitle="Your home, our comfort"/>
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" type="password" label="Password" register={register} errors={errors} required/>
        </div>
    );

    const footerContent = (
        <div className="flex flex-col items-center gap-x-2">
            <Button label="Signup with Google" onClick={() => {
            }} icon={FcGoogle}/>
            <Button label="Signup with GitHub" onClick={() => {
            }} icon={AiFillGithub}/>

            <div>
                <span>Already have an account?</span>
                <span className="font-semibold hover:underline cursor-pointer">Log in</span>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={registrationModal.isOpen}
            onCLose={registrationModal.onClose}
            onSubmit={() => {
            }}
            title="Register"
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegistrationModal;
