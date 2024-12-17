import { FaGreaterThan } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import Detail from "../components/Detail";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="contact">
            <div className="contactBanner w-[100%] h-[316px]">
                <div className="flex">
                    <img src="/Contact/banner.png" alt="banner" className="w-[100%] h-[316px] absolute" />
                    <img src="/Contact/contactLogo.png" alt="contactLogo" className="absolute top-[180px] left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <h1 className="absolute top-[220px] left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Poppins] font-bold text-[48px]">Contact</h1>
                    <div className="absolute top-[260px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                        <h3 className="font-bold"><Link href='/'>Home</Link></h3>
                        <h3 className="mt-[5px] ml-2"><FaGreaterThan /></h3>
                        <h3 className="ml-2 hover:font-bold"><Link href='/Contact'>Contact</Link></h3>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] h-[1144px] mt-[100px] ml-[100px] ">
                <div className="justify-center text-center text-4xl">
                    <h1>Get In Touch With Us</h1>
                </div>
                <div className="justify-center text-center pt-2">
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className="form w-[1058px] h-[923px] ml-[191px] pt-[100px] flex">
                    <div className="w-[50%] h-[100%]">
                        <div className="w-[393px] h-[537px] mt-[68px]">
                            <div className="h-[150px]">
                                <div className="flex">
                                    <h3 className="text-[22px] pl-[54px] pt-[46px]"><MdLocationOn /></h3>
                                    <h1 className="pt-[46px] pl-2 font-[Poppins] font-medium text text-2xl">Address</h1>
                                </div>
                                    <p className="px-20">236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
                            </div>
                            <div className="h-[150px]">
                                <div className="flex">
                                    <h3 className="text-[22px] pl-[54px] pt-[46px]"><FaPhoneAlt /></h3>
                                    <h1 className="pt-[46px] pl-2 font-[Poppins] font-medium text text-2xl">Phone</h1>
                                </div>
                                    <p className="px-20">Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789</p>
                            </div>
                            <div className="h-[237px]">
                                <div className="flex">
                                    <h3 className="text-[22px] pl-[54px] pt-[46px]"><MdAccessTimeFilled /></h3>
                                    <h1 className="pt-[46px] pl-2 font-[Poppins] font-medium text text-2xl">Working Time</h1>
                                </div>
                                    <p className="px-20">Monday-Friday: 9:00 - <br /> 22:00 <br />
                                    Saturday-Sunday: 9:00 - <br /> 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-[100%]">
                        <div className="w-[431px] h-[741px] mt-10 ml-10">
                            <form className="ml-auo space-y-4 pt-10">
                                <h3>Your Name</h3>
                                <input type='text' placeholder='abc'
                                    className="w-full h-[75px] text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-amber-600" />
                                <h3>Email address</h3>
                                <input type='email' placeholder='Abc@def.com'
                                    className="w-full h-[75px] text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-amber-600" />
                                <h3>Subject</h3>
                                <input type='text' placeholder='This is an optional'
                                    className="w-full h-[75px] text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-amber-600" />
                                <h3>Message</h3>
                                <textarea placeholder='Hi! i’d like to ask about'
                                    className="w-full h-[120px] text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-amber-600"></textarea>
                                <button type='button'
                                    className="w-[237px] h-[55px] text-white bg-[#B88E2F] hover:bg-opacity-50 rounded-[5px] text-sm px-4 py-2 !mt-6">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Detail />
            </div>
            

        </div>

    );
  };

