import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/utils/api";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  // for payment checkout
  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({ sessionId: res.stripeSession.id });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full py-10 md:py-20 bg-gradient-to-r from-black via-purple-900 to-black text-white">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* heading start */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] text-white mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* heading end */}

            {/* Cart content start */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* cart items start */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              {/* cart items end */}

              {/* cart summary start */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5 bg-white/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-white">
                      SubTotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-white">
                      ₹{subTotal}
                    </div>
                  </div>

                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                {/* button start */}
                <button
                  className="w-full py-4 rounded-full bg-green-500 text-black text-lg 
                  font-medium transition-transform active:scale-95 mb-3 hover:bg-green-600"
                  onClick={handlePayment}
                >
                  {loading ? (
                    <div className="flex justify-center h-4 items-center">
                    <img
                      src="/spinner.svg"
                    />
                    </div>
                  ) : (
                    "Checkout"
                  )}
                </button>
                {/* button end */}
              </div>
              {/* cart summary end */}
            </div>
            {/* Cart content end */}
          </>
        )}

        {cartItems.length < 1 && (
          <>
            {/* Empty cart Message start */}
            <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
              <Image
                src="/empty-cart.jpg"
                width={300}
                height={300}
                className="w-[300px] md:w-[400px] rounded-[500px]"
              />
              <span className="text-xl font-bold mt-10">
                Your cart is empty!
              </span>

              <span className="text-center mt-4">
                Looks like you have not added anything to your cart.
                <br />
                Explore our collection and choose your pick!
              </span>
              <Link
                href="/"
                className="py-4 px-8 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 mb-3 mt-6 hover:bg-green-300"
              >
                Back to Pavilion
              </Link>
              {/* Empty cart message end */}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
