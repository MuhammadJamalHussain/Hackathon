import { FaGreaterThan } from "react-icons/fa6";
import { PiSquaresFourFill } from "react-icons/pi";
import Product from "../components/Product"
import Detail from "../components/Detail"
import Link from "next/link";





















export default function Shop() {
    return (
      <div className="shop">
            <div className="contactShop w-[100%] h-[316px]">
                <div className="flex">
                    <img src="/Contact/banner.png" alt="banner" className="w-[100%] h-[316px] absolute" />
                    <h1 className="absolute top-[220px] left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Poppins] font-bold text-[48px]">Shop</h1>
                    <div className="absolute top-[260px] left-1/2 -translate-x-1/2 translate-y-1/2 flex">
                        <h3 className="font-bold"><Link href='/'>Home</Link></h3>
                        <h3 className="mt-[5px] ml-2"><FaGreaterThan /></h3>
                        <h3 className="ml-2 hover:font-bold"><Link href='/Shop'>Shop</Link></h3>
                    </div>
                </div>
            </div>
            <div className="filter w-[100]% h-[100px] border border-[#9F9F9F] bg-[#F9F1E7] flex">
                <div className="pl-[98px] pt-[37px]">
                    <img src="/Shop/Vector.png" alt="vector" height={'24px'} width={'24px'} />
                </div>
                <div className="text-black pt-[34px] pl-[5px] font-normal leading-[30px] text-[20px] font-[Poppins]">
                  <h3>Filter</h3>
                </div>
                <div className="pl-[23px] pt-[37px]">
                  <h3 className="text-[28px]"><PiSquaresFourFill /></h3>
                </div>
                <div className="pl-[24px] pt-[38px]">
                <img src="/Shop/bi_view-list.png" alt="vector" height={'24px'} width={'24px'} />
                </div>
                <div className="border-2 rotate-[-90deg] bg-[#9F9F9F] w-30px h-0 pl-[30px] mt-[48px]"></div>
                <div className="pl-[32px] pt-[37px] leading-[24px] text-[16px] font-normal font-[Poppins]">
                  <p>Showing 1–16 of 32 results</p>
                </div>
                <div className="pl-[349px] pt-[37px] leading-[30px] font-normal text-[20px] font-[Poppins]">
                  <h3>Show</h3>
                </div>
                <div className="ml-[17px] mt-[27px] h-[55px] w-[55px] bg-[#FFFFFF] text-center justify-center">
                  <h1 className="pt-[12px] text-[#9F9F9F] leading-[30px] text-[20px] font-normal font-[Poppins]">16</h1>
                </div>
                <div className="mt-[37px] ml-[19px] ">
                  <p className=" leading-[30px] text-[20px] font-normal font-[Poppins]">Short by</p>
                </div>
                <div className="ml-[17px] mt-[27px] h-[55px] w-[188px] bg-[#FFFFFF] justify-center">
                  <h1 className="pt-[12px] pl-[30px] text-[#9F9F9F] leading-[30px] text-[20px] font-normal font-[Poppins]">Default</h1>
                </div>
            </div>
            <div className="product w-full h-[2051px] mt-[46px] pt-[17px] pl-[176px]">
              <div className="w-[1244px] h-[2034px] gap-[40px]">
                <div className="w-[1236px] h-[446px] ml-[4px]">
                  <Product />
                </div>
                <div className="w-[1236px] h-[446px] ml-[4px]">
                  <Product />
                </div>
                <div className="w-[1236px] h-[446px] ml-[4px]">
                  <Product />
                </div>
                <div className="w-[1236px] h-[446px] ml-[4px]">
                  <Product />
                </div>
                <div className="w-[392px] h-[90px] mt-[30px] gap-[38px] ml-[426px] flex">
                  <div className="h-[60px] w-[60px] rounded-[10px] bg-[#B88E2F] text-center">
                    <h1 className="pt-[12px] leading-[30px] text-[20px] font-normal font-[Poppins]">1</h1>
                  </div>
                  <div className="h-[60px] w-[60px] rounded-[10px] bg-[#F9F1E7] hover:bg-yellow-800 text-center">
                    <h1 className="pt-[12px] leading-[30px] text-[20px] font-normal font-[Poppins]">2</h1>
                  </div>
                  <div className="h-[60px] w-[60px] rounded-[10px] bg-[#F9F1E7] hover:bg-yellow-800 text-center">
                    <h1 className="pt-[12px] leading-[30px] text-[20px] font-normal font-[Poppins]">3</h1>
                  </div>
                  <div className="h-[60px] w-[98px] rounded-[10px] bg-[#F9F1E7] hover:bg-yellow-800 text-center">
                    <h1 className="pt-[12px] leading-[30px] text-[20px] font-normal font-[Poppins]">Next</h1>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <Detail />
            </div>


            




      </div>
    );
  }