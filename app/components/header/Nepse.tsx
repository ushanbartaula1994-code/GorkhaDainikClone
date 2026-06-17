import {marketData} from '@/app/data/navbar.data'



function Nepse() {
  return (
    <div className="hidden  z-40 lg:flex w-full h-[50px] items-center  bg-[#EEF2FF]">
      <div className="w-[90px] h-[50px] bg-[#1E40AF] flex items-center justify-center shrink-0">
        <span className="w-[6px] h-[6px] rounded-full bg-white animate-dot-glow mr-1.5 mb-0.5 shrink-0"></span>
        <span className="text-white text-[13.6px] font-bold tracking-[0.54px]">
          NEPSE
        </span>
      </div>
      <div className="flex-1 h-[39px] overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-marquee gap-10 group">
          {[...marketData, ...marketData].map((item, i) => (
            <div
              key={i}
              className="flex gap-2 border-l border-[#C7D2FE] p-1 items-center h-[39px] min-w-[80px] hover:bg-[#c8d2f4] cursor-pointer transition-colors duration-200"
            >
              <span className="font-bold text-[14px] leading-[22.4px] text-[#1E40AF]  ">
                {item.symbol}
              </span>
              <span className="font-normal text-[14px] leading-[22.4px] tracking-normal align-middle text-[#111110]">
                {item.price}
              </span>
              <span
                className={`font-mono  font-normal text-[14px]  leading-[22.4px] tracking-normal align-middle ${
                  item.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.trend === "up" ? "▲" : "▼"}
                <span className="ml-1">{item.change}</span>
                <span>{item.percent}%</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[115px] h-[39px] px-4 border-l flex gap-1 items-center border-[#C7D2FE] shrink-0 font-semibold text-[11.2px] leading-[17.92px] text-[#6366F1]">
        <span className="w-1 h-1 mb-0.5 rounded-full bg-[#1E40AF] shrink-0"></span>
        <span className="whitespace-nowrap">Market Closed</span>
      </div>
    </div>
  );
}

export default Nepse
