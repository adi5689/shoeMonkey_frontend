import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";



export default function Home({ products }) {
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    // const fetchProducts = async () => {
    //    const {data} = await fetchDataFromApi('/api/products');
    //    setData(data);
    // }
    return (
        <main className="bg-gradient-to-r from-black via-purple-900 via-10% to-black pb-6">
            <HeroBanner />
            <Wrapper>
                {/* heading and Paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-white">
                        Like a Drug Store, <br/> To all the Sneaker Junkies out there!
                    </div>
                    <div className="text-md md:text-xl text-white">Select your kind of dose, from Air Jordans to Chuck Taylors, from NMD's to Air Force 1's, we got it all covered.</div>
                </div>
                {/* end */}


                {/* product grid start */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-2 px-1 md:px-0">
                   {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product}/>
                   ))}
                </div>
                {/* product grid end */}
            </Wrapper>
        </main>
    )
}

export async function getStaticProps() {
    const products = await fetchDataFromApi('/api/products?populate=*');

    return {
        props: { products: products}
    }}