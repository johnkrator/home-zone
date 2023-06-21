"use client";
import React, {useEffect} from "react";
import EmptyState from "@/app/components/EmptyState";

interface IErrorProps {
    error: Error;
}

const ErrorState: React.FC<IErrorProps> = ({error}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <EmptyState title="Ooops, sorry!" subtitle="Something went wrong"/>
        </div>
    );
};

export default ErrorState;
