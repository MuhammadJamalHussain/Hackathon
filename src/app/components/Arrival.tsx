export default function Arrival(){
    return(
        <div className="banner">
        <img src="Home/homeBanner.png" alt="homeBanner" height={'716.83px'} width={'100%'} />
        <div className="w-[643px] h-[443px] absolute top-[253px] rounded-[10px] left-[839px] translate-x-2 translate-y-1 bg-[#FFF3E3] flex">
            <div className="w-[561px] h-[344px] ml-[39px] mt-[62px]">
              <div>
                  <h3 className="text-[#333333] text-[16px] font-semibold">New Arrival</h3>
                  <h2 className="text-primary text-[41px] md:text-[52px] font-bold leading-[50px] md:leading-[65px] mb-[17px]">Discover Our <br />New Collection</h2>
                  <p className="font-medium md:text-[18px] text-[11px]  text-[#333333] leading-[16px] md:leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
               </div>
                <div className="pt-[25px] pb-[25px] pl-[75px] pr-[75px] mt-[60px] w-fit bg-[#B88E2F]">
                  <button>
                  <p className="text-white font-bold text-[16px]">BUY NOW</p>
                  </button>
                </div>
            </div>
        </div>
      </div>
    )
};