import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-red duration-200 hover:scale-105 rounded-md"
    >
      <div className="bg-black">
        <Image
          width={500}
          height={500}
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
        />
        {/* <img className="w-full" src="/product-1.webp" alt="product image" /> */}
        <div className="p-2 gap-2 h-[120px] md:h-[100px] rounded-md text-white">
          <h2 className="text-[11px] md:text-[20px] font-medium leading-tight">{p.name}</h2>
          <div className="flex flex-col md:flex-row leading-snug text-white/[0.8]">
            <p className="mr-1 md:mr-2 text-[11px] md:text-lg font-semibold">&#8377;{p.price}</p>

            {p.original_price && (
              <>
                <p className="text-[11px] md:justify-center md:items-center md:text-base font-medium line-through">&#8377;{p.original_price}</p>
                <p className="ml-0 md:ml-auto text-[11px] md:text-base font-medium text-green-500">
                  {getDiscountedPricePercentage(p.original_price, p.price)}% off
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
