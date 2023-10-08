import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cartSlice";
import { addToWishlist } from "@/store/wishSlice";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import React from "react";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [showError, setShowError] = useState(false);
  const [selectedSize, setSelectedSize] = useState();
  const dispatch = useDispatch();

  const notifyWishlist = () => {
    toast.success("Success. Check your Wishlist", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const notifyCart = () => {
    toast.success("Success. Check your Cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const p = product?.data?.[0]?.attributes;

  return (
    <div className="w-full md:py-20 bg-gradient-to-r from-black via-purple-900 to-black">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap:[50px] lg:gap-[100px]">
          {/* left Col start */}
          <div className="w-full md:w-auto mt-6 flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* end */}

          {/* right col start */}
          <div className="flex-[1] py-3 text-white">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">{p.name}</div>

            {/* product subtitle */}
            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            {/* product price */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    &#8377;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>
            <div className="text-md font-medium text-white/[0.5]">
              Incl. of all taxes.
            </div>
            <div className="text-md font-medium text-white/[0.5]">
              {`(Also includes all applicable duties)`}
            </div>

            {/* product size range start */}
            <div className="mb-10 mt-8 md:mt-16">
              {/* heading start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-white/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* heading end */}

              {/* size menu start */}
              <div id="sizesgrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium 
                       ${
                         item.enabled
                           ? "hover:bg-green-400 hover:border-black hover:text-black cursor-pointer"
                           : "bg-black/[0.1] opacity-50 cursor-not-allowed"
                       } ${
                      selectedSize === item.size ? "border-green-500" : ""
                    }`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* size menu end */}

              {/* show error start */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required!
                </div>
              )}

              {/* show error end */}
            </div>
            {/* product size range end */}

            {/* Add to cart button start */}
            <button
              className="w-full py-4 rounded-[100px] border border-white bg-black text-white 
              text-lg font-medium transition-transform active:scale-95 mb-3 
            hover:bg-green-400 hover:border-black hover:text-black"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesgrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  // for cart
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price
                    })
                  );
                  notifyCart();
                }
              }}
            >
              Add to cart
            </button>
            {/* Add to cart button end */}

            {/* Whishlist button start */}
            <button
              className="w-full py-4 rounded-[100px] border bg-white border-gray-500 text-black
              text-lg font-medium transition-transform active:scale-95 flex items-center mb-10 
              justify-center gap-2 hover:bg-orange-500 hover:text-white"
              onClick={() => {
                {
                  // for cart
                  dispatch(
                    addToWishlist({
                      ...product?.data?.[0]
                    })
                  );
                  notifyWishlist();
                }
              }}
            >
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Whishlist button end */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>

              <div className="text-md mb-2 markdown">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right col end */}
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

//getStaticPaths requires using getStaticProps
export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
