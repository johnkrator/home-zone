import React from "react";
import {PuffLoader} from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <PuffLoader size={100} color="red"/>
        </div>
    );
};

export default Loader;
