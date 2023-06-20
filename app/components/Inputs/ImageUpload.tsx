"use client";
import React, {useCallback} from "react";
import {CldUploadWidget} from "next-cloudinary";
import Image from "next/image";
import {TbPhotoPlus} from "react-icons/tb";

declare global {
    var cloudinary: any;
}

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

interface IImageUploadProps {
    onChange: (value: string) => void;
    value: string;
}

const ImageUpload: React.FC<IImageUploadProps> = ({onChange, value}) => {
    const handleUpload = useCallback(
        (result: any) => {
            onChange(result.info.secure_url);
        },
        [onChange]
    );

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset={uploadPreset}
            options={{maxFiles: 1}}
        >
            {({open}) => {
                return (
                    <div
                        className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
                        onClick={() => open && open()}
                    >
                        <TbPhotoPlus size={50}/>
                        <div className="font-semibold text-lg">Click to upload image</div>
                        {value && (
                            <div className="absolute insert-0 w-full h-full">
                                <Image
                                    fill
                                    style={{objectFit: "cover"}}
                                    src={value}
                                    alt="house"
                                />
                            </div>
                        )}
                    </div>
                );
            }}
        </CldUploadWidget>
    );
};

export default ImageUpload;
