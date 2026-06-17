"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

const TEAM_NE = [
  { initials: "न.ढ.", name: "नरेन्द्र ढकाल", phone: "९८४६०९८०७३" },
  { initials: "बि.गु.", name: "बिबर गुरुङ", phone: "९८६१९९२७४२" },
  { initials: "अ.मि.", name: "अब्जल मियाँ", phone: "९८४६७४७००२" },
];

const TEAM_EN = [
  { initials: "N.D.", name: "Narendra Dhakal", phone: "+977 9846098073" },
  { initials: "B.G.", name: "Biber Gurung", phone: "+977 9861992742" },
  { initials: "A.M.", name: "Abjal Miya", phone: "+977 9846747002" },
];

export default function OurTeam() {
  const { lang } = useLanguage();
  const team = lang === "EN" ? TEAM_EN : TEAM_NE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col w-full pb-[52px]"
    >
      
      <div className="flex items-center gap-2 mb-[22px]">
        <span className="w-[3px] self-stretch bg-[#C01C28] rounded-full" />
        <h2 className="font-nep font-bold text-[16px] md:text-[17.6px] leading-[28.16px] tracking-[-0.18px] text-[#111110]">
          {lang === "EN" ? "Our Team" : "हाम्रो टोली"}
        </h2>
      </div>

      
      <div className="w-full border-t-2 border-black mb-[22px]" />

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex flex-col items-center gap-[7px] bg-white border border-[#E8E4E0] rounded-[8px] p-[20px]"
          >
           
            <div className="w-[72px] h-[72px] rounded-full bg-[#EDEAE3] flex items-center justify-center flex-shrink-0">
              <span className="font-nep font-bold text-[16px] leading-[25.6px] text-[#7A7470]">
                {member.initials}
              </span>
            </div>

            
            <p className="font-nep font-bold text-[16px] leading-[25.6px] text-[#111110] text-center">
              {member.name}
            </p>

            
            <p className="font-mono font-normal text-[12.2px] leading-[19.46px] text-[#7A7470] text-center">
              {member.phone}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
