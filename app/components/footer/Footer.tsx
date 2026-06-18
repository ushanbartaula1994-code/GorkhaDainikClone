"use client";

import Link from "next/link";
import { footerNewsLinks } from "@/app/data/footer.data";
import { useLanguage } from "@/app/context/LanguageContext";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import {
  h6Style,
  addressStyle,
  contactStyle,
  footerLinksStyle,
  copyrightStyle,
  footerSmallText,
} from "@/app/styles/footer.style";
function Footer() {
  const { lang } = useLanguage();
const newsLinks = footerNewsLinks.map((item) => ({
  name: lang === "EN" ? item.en : item.ne,
  href: item.href,
}));
  return (
    <section className="w-full border-t-2 border-t-[#C01C28]">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-10 pt-11 min-h-[324px] flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 items-start border-b border-black/10 pb-5 ">
          <div className="contact w-full md:w-auto  flex flex-col gap-2 md:gap-2 ">
            <div className="md:mt-20 lg:mt-20 ">
              {" "}
              <h2 className="md:h-[45px] leading-[33.28px] tracking-[-0.42px] font-nep md:font-extrabold text-[20.8px] md:text-[28px] md:leading-[44.8px] md:tracking-[-0.56px] text-[#111110]">
                {lang==="EN"?"Gorkha": "गोर्खा"}
                <span className="md:h-[45px] leading-[33.28px] tracking-[-0.42px] font-nep md:font-extrabold text-[20.8px] md:text-[28px] md:leading-[44.8px] md:tracking-[-0.56px] text-[#C01C28] ml-1">
                 {lang==="EN"?"Daily": "दैनिक"}
                </span>
              </h2>
            </div>
            <p
              className="font-nep font-normal text-base  md:text-sm leading-[24px] tracking-normal 
            text-[#7A7470]"
            >
              {lang === "EN"
                ? "Voice of Gorkha, News of Nepal. In service since 2018."
                : "गोर्खाको आवाज, नेपालको खबर। २०७५ देखि निरन्तर सेवामा।"}
            </p>
            <div className="flex flex-wrap gap-2 ">
              {[{ text: "FB" }, { text: "YT" }, { text: "TW" }].map(
                (item, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="w-[38px] h-[38px] flex items-center justify-center rounded-[8px] border border-black/10 text-[#7A7470] text-base md:text-[10px] font-bold hover:text-white hover:bg-[#C01C28] cursor-pointer"
                  >
                    {item.text}
                  </button>
                ),
              )}
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-12 md:gap-16 w-full md:w-[351px]  md:mr-12 md:pr-12">
            <div className="flex flex-col gap-1 md:gap-3">
              <h6 className={h6Style}>{lang === "EN" ? "News" : "समाचार"}</h6>
              <div className="flex flex-col gap-[6px] md:gap-2 whitespace-nowrap">
                {newsLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={footerLinksStyle}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h6 className={h6Style}>
                {lang === "EN" ? "Contact" : "सम्पर्क"}
              </h6>
              <p className={`${addressStyle} flex items-center gap-2`}>
                <MapPin size={18} />{" "}
                {lang === "EN"
                  ? " Gorkha Municipality-6, Harmtar"
                  : " गोरखा नगरपालिका ६, हरमटारी"}
              </p>
              <p
                className=" font-nep md:font-ui font-normal text-[15.6px]
               leading-[25.74px]   tracking-normal text-[#7A7470] flex items-center gap-2"
              >
                <Mail size={18} /> gorkhadainik99@gmail.com
              </p>
              <p className={`${contactStyle} flex items-center gap-2`}>
                <Phone size={18} />{" "}
                {lang === "EN" ? "+977 9846098073" : "+९७७ ९८४६०९८०७३"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 w-full mx-auto flex flex-col md:flex-row items-center md:justify-between gap-2 md:mt-6 md:gap-0 pt-5 pb-5">
          <p className={copyrightStyle}>
            {lang === "NE"
              ? "© २०८१ गोर्खा दैनिक। सर्वाधिकार सुरक्षित ।"
              : "© 2024 Gorkha Daily. All rights reserved."}
          </p>
          <div className="flex flex-row gap-1 md:gap-3">
            <p className={footerSmallText}>
              {lang === "EN" ? "Press Policy" : "प्रेस नीति"}
            </p>
            <p className={footerSmallText}>
              {lang === "EN" ? "Privacy" : "गोपनीयता"}
            </p>
            <Link href='/about' className={footerSmallText}>
              {lang === "EN" ? "About US" : "हाम्रो बारेमा"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
