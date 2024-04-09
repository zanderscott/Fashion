import React from 'react';
import Link from "next/link";

const SuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">
                Payment Successful!
            </h1>
            <p className="text-lg mb-2">
                Thank you for your purchase.
            </p>
            <p className="text-lg mb-2 text-center">
                An email with your receipt has been sent to your registered email address.
            </p>
            <Link href={"/"}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                    Go to Homepage
                </button>
            </Link>
        </div>
    );
};

export default SuccessPage;