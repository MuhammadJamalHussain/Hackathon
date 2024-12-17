export default function Footer(){
    return(
        <footer  className="bg-[#FFFFFF] font-sans tracking-wide">
      <div  className="py-14 sm:px-10">
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

          <div  className="lg:col-span-2 pl-[100px]">
            <a href='javascript:void(0)'><img src="/Footer/Funiro.png" alt="logo"
               className='w-[85px] mb-8' /></a>
            <p  className="text-gray-300 text-sm">400 University Drive Suite 200 Coral  <br />  Gables,
            <br /> FL 33134 USA</p>
          </div>

          <div>
            <h4  className="text-lg font-semibold mb-8 text-[#9F9F9F]">Links</h4>
            <ul  className="space-y-4">
              <li><a href="javascript:void(0)"  className="text-black hover:text-gray-500 text-sm">Home</a></li>
              <li><a href="javascript:void(0)"  className="text-black hover:text-gray-500 text-sm">Shop</a></li>
              <li><a href="javascript:void(0)"  className="text-black hover:text-gray-500 text-sm">About</a></li>
              <li><a href="javascript:void(0)"  className="text-black hover:text-gray-500 text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4  className="text-lg font-semibold mb-8 text-[#9F9F9F]">Help</h4>

            <ul  className="space-y-4">
              <li><a href="javascript:void(0)"  className="text-black hover:text-gray-500 text-sm">Payment Options</a></li>
              <li><a href="javascript:void(0)"  className="text-black hover:text-gray-500 text-sm">Returns</a></li>
              <li><a href="javascript:void(0)"  className="text-black hover:text-gray-500 text-sm">Privacy Policies</a></li>
            </ul>

          </div>

          <div>
          <div>
          <h4 className="text-[#9F9F9F] font-bold text-lg">Newsletter</h4>

          <div className="flex px-2 mt-12 border-b-2">
            <input type='email' placeholder='Enter Your Email Address'
              className="w-full outline-none text-gray-300 text-sm bg-transparent" />
            <button type='button'
              className=" hover:bg-white transition-all text-black font-semibold text-sm px-4 py-2 ml-4">Subscribe</button>
          </div>
          </div>

        </div>
      </div>
      </div>

      <div  className="pl-[134px] py-5 border-t-2">
        <p  className='text-black text-sm'>2023 furino. All rights reverved</p>
      </div>
    </footer>
    )
};