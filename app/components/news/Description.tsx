"use client"
import { useLanguage } from "@/app/context/LanguageContext";
interface Props{
    descriptionNE:string,
    descriptionEN:string,
}
 export default function Description({ descriptionNE, descriptionEN }:Props) {
    const {lang}=useLanguage()
   return (
     <div className="w-full pt-[5px]">
       <p className="font-nep font-normal text-[18px] leading-[31.5px] tracking-normal align-middle text-[#3D3B38]">
        {lang==="EN"?descriptionEN:descriptionNE}
       </p>
     </div>
   );
 }

