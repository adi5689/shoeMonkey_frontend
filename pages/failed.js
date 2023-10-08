import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center text-white bg-gradient-to-r from-black via-purple-900 to-black">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-red-600 mx-auto flex flex-col">
                    <div className="text-2xl font-bold">Payment failed!</div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">heymonkey@shoemonkey.com</div>

                    <Link href="/" className=" font-bold mt-5 w-[200px] text-white hover:border-b-2 hover:border-green-300">
                        Back to Pavilion!
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;