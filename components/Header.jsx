import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const {cartItems} = useSelector((state => state.cart ))

  // navbar hiding on scroll
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[140px]");
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  // category data fetching
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[100px] md:h-[140px] bg-gradient-to-t from-violet-900 via-neutral-900 to-black flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
      style={{ boxShadow: "inset 0px -4px 4px rgba(255, 255, 255, 0.8)" }}
    >
      <Wrapper className="h-60px flex justify-between items-center">
        <div className="logo w-[80px] md:[120px]">
          <Link href="/" className="">
            <img
              src="/output.png"
              className="w-[60px] md:w-[120px]"
              style={{
                filter:
                  "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.9)) contrast(150%)",
              }}
            />
            <h3 className="text-[16px] text-white">ShoEMonkeY</h3>
          </Link>
        </div>

        <Menu 
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />


        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          {/* icon Start */}
          <Link href="/whishlist">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full flex justify-center items-center hover:bg-black   cursor:pointer relative">
              <IoMdHeartEmpty className="text-[24px] md:text-[26px] text-white hover:text-red-600" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px:[5px]">
                0
              </div>
            </div>
          </Link>
          {/* icon end */}

          {/* icon Start */}
          <Link href="/cart">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full flex justify-center items-center hover:bg-black  cursor:pointer relative">
              <BsCart className="text-[24px] md:text-[26px] text-white hover:text-red-600" />
              {cartItems.length > 0 &&
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px:[5px]">
                    {cartItems.length}
                </div>}
            </div>
          </Link>

          {/* icon end */}

          {/* mobile icon start */}
          <div className=" md:hidden w-10 md:w-12 h-10 md:h-12 rounded-full flex justify-center items-center  cursor:pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[24px] text-white"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[26px] text-white"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
