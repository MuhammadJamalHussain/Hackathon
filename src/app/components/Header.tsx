import { BsPersonPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link"


export default function Header(){
    return(
        <div>
            <header>
                <div className="parentContainer flex gap-10 pt-[29px] pl-[100px]">
                    <div className="logo">
                        <Link href="/">
                            <img src="/Header/logo.png" alt="logo" width={'185px'} height={'41px'}/>
                        </Link>
                    </div>
                    <div className="menu pt-[9px] pl-[305px] font-bold">
                        <ul className="flex gap-10">
                            <li className="hover:border-b-2 ">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="hover:border-b-2">
                                <Link href="/Shop">Shop</Link>
                            </li>
                            <li className="hover:border-b-2">
                                <Link href="/Blog">Blog</Link>
                            </li>
                            <li className="hover:border-b-2">
                                <Link href="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div  className="icons flex pt-[12px] pl-[200px] gap-5">
                        <h3 className="w-[28px] h-[28px] hover:text-yellow-800" ><BsPersonPlus /></h3>
                        <h3 className="w-[28px] h-[28px] hover:text-yellow-800" ><CiSearch /></h3>
                        <h3 className="w-[28px] h-[28px] hover:text-yellow-800" ><CiHeart /></h3>
                        <h3 className="w-[28px] h-[28px] hover:text-yellow-800" ><IoCartOutline /></h3>
                    </div>
                </div>
            </header>
        </div>
    )
};