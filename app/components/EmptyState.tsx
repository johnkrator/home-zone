"use client";
import React from "react";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/Button";
import {useRouter} from "next/navigation";

interface IEmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<IEmptyStateProps> = ({
                                                    title = "No exact matches found",
                                                    subtitle = "Try again",
                                                    showReset
                                                }) => {

    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center gap-4 h-[60vh]">
            <Heading center title={title} subtitle={subtitle}/>
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        onClick={() => router.push("/")}
                        outline
                        label="Remove all filters"
                    />
                )}
            </div>
        </div>
    );
};

export default EmptyState;
