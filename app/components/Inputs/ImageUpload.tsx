"use client";
import React, {useCallback} from "react";
import {CldUploadWidget} from "next-cloudinary";
import {TbPhotoPlus} from "react-icons/tb";
import Image from "next/image";

declare global {
    var cloudinary: any;
}

interface IImageUploadProps {
    onChange: (value: string) => void;
    value: string;
}

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

const ImageUpload: React.FC<IImageUploadProps> = ({onChange, value}) => {
    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url);
    }, [onChange]);

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset={uploadPreset}
            options={{maxFiles: 1}}
        >
            {({open}) => {
                return (
                    <div
                        className="relative cursor-pointer hover:opacity-70 transition border-dashed border p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
                        onClick={() => open?.()}
                    >
                        <TbPhotoPlus size={50}/>
                        <div className="font-semibold text-lg">Upload Image</div>
                        {value && (
                            <div>
                                <Image src={value} fill className="object-cover" alt="house"/>
                            </div>
                        )}
                    </div>
                );
            }}
        </CldUploadWidget>
    );
};

export default ImageUpload;
