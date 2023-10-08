import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center bg-gradient-to-r from-black via-purple-900 to-black text-white">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-green-500 mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">heymonkey@shoemonkey.com</div>

                    <Link href="/" className="font-bold mt-5 w-[200px] hover:border-b-2 hover:border-green-300">
                        Back to Den!
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;