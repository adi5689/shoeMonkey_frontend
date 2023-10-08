import Image from "next/image";
import Link from "next/link";
import React from "react";

const whishlist = () => {
  return (
    <div className="h-[800px] bg-gradient-to-r from-black via-purple-900 to-black text-white">
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] text-white pt-8 mb-5 font-semibold leading-tight">
          Wishlist
        </div>
         {/*Empty cart Message start */}
        <div className="flex-[2] pt-[60px] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image 
                src='/empty-cart.jpg'
                width={300}
                height={300}
                className="w-[300px] md:w-[400px] rounded-[500px]"
            />
            <span className="text-xl font-bold mt-10">
                Your wishlist is empty!
            </span>

            <span className="text-center mt-4">
                Looks like you have not added anything to your wishlist.
                <br />
                Explore our collection and choose your pick!
            </span>
            <Link 
                href="/"
                className="py-4 px-8 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 mb-3 mt-6 hover:bg-green-300"
            >
                Back to Pavilion
            </Link>
        </div>
        {/* Empty cart message end */}
      </div>
    </div>
  );
};

export default whishlist;
