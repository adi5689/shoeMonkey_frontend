import { updateCart, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";


// const quantityArr = [1,2,3,4,5,6]


const CartItem = ({ data }) => {
  const p = data.attributes;
  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  }
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b text-white">
      {/* image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          width={120}
          height={120} 
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
        />
      </div>
      {/* image end */}

      {/*  */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* product title */}
          <div className="text-lg md:text-2xl font-semibold text-white/[0.8]">
            {p.name}
          </div>

          {/* product subtitle */}
          <div className="text-sm md:text-md font-medium text-white/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          {/* product price */}
          <div className="text-sm md:text-md font-bold text-white/[0.5] mt-2">
            MRP: ₹{p.price}
          </div>
        </div>

        {/* product subtitle */}
        <div className="text-sm md:text-md font-medium text-white/[0.5] hidden md:block">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-white/[0.5] text-sm md:text-md">
                <div className="flex items-center gap-1">
                    <div className="font-semibold">Size:</div>
                    <select className="bg-black rounded-lg px-2 py-1 text-white hover:text-white" onChange={(e) => updateCartItem(e, "selectedSize")}>
                      {p.size.data.map((item, i) => {
                        return (
                          <option 
                            key={i}
                            value={item.size}
                            disabled={!item.enabled ? true : false}
                            selected={data.selectedSize === item.size}
                          >
                              {item.size}
                          </option>
                        )
                      })}
                    </select>
                </div>

                <div className="flex items-center gap-1">
                    <div className="font-semibold">Quantity:</div>
                    <select className="bg-black rounded-lg px-2 py-1 text-white hover:text-white" onChange={(e) => updateCartItem(e, "quantity")}>
                      {Array.from({length:6}, ( _, i ) => i+1).map((q,i) => {
                        return (
                          <option
                            key={i}
                            value={q}
                            selected={data.quantity === q}
                          >
                            {q}
                          </option>
                        )
                      })}
                    </select>
                </div>
            </div>
            <RiDeleteBin6Line 
              onClick={() => dispatch(removeFromCart({id: data.id}))}
              className="cursor-pointer text-white/[0.8] hover:text-red-600 text-[16px] md:text-[20px]"
            />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
