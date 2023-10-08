// import PhotoCollage from "@/components/PhotoCollage";
import Wrapper from "@/components/Wrapper";
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-black via-purple-900 to-black">
      <div className="md:px-5 py-[50px] flex md:flex-row flex-col-reverse items-center justify-center">
        {/* about image start */}
        <div className="flex items-center justify-center w-[200px]  md:w-[600px]">
          <img src="/collage.png" />
        </div>
        {/* about image end */}


        {/* details */}
        <div className="text-white md:w-[1000px] px-[50px]">
          <div className="flex text-[30px] font-bold">
            About
          </div>

          <div>
            <h1 className="text-[32px] align-middle mt-9">ShoEMonkeY</h1>
            <h3 className="text-red-600 mt-3">Where Your Kicks Get Jiggy!</h3>
          </div>

          <div className="text-left text-sm md:text-lg mt-7">
            ShoEMonkeY is an online haven for sneaker enthusiasts worldwide,
            born from the shared passion of a close-knit group of friends. This
            unique venture emerged from the hallways of high school, where a
            group of sneaker junkies nurtured a dream to create a global
            sanctuary for sneakerheads. From the moment it opened its virtual
            doors, ShoEMonkeY stood out as a remarkable online store, offering a
            curated collection of exclusive footwear from renowned brands like
            Converse, Nike, and Adidas. Each pair of sneakers embodies
            innovation, craftsmanship, and style, attracting those with an
            insatiable thirst for unique footwear. However, ShoEMonkeY is not
            merely an e-commerce platform; it's a vibrant community. Recognizing
            the essence of sneaker culture, its founders cultivated a hub where
            like-minded individuals connect, share their passion, and inspire
            one another. Today, ShoEMonkeY thrives as a testament to the power
            of dreams and the strength of friendship, offering an ever-growing
            community of global sneaker enthusiasts the chance to connect,
            share, and experience the extraordinary world of sneakers.
          </div>
        </div>
        {/* details end */}
      </div>
    </div>
  );
};

export default About;
