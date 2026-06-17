"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "@/app/data/navbar.data";
import { Fragment, useState, useEffect } from "react";
import { Search, Menu, X, Home } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const Navbar = () => {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed font-nep top-0 left-0 w-full h-15.5 px-4 md:px-6 bg-[#FFFFFF] flex items-center justify-between shadow-navbar border-b border-[#0000001A] z-50">
      {/* Left: hamburger (mobile) + logo (desktop) */}
      <div className="flex items-center">
        <button
          className="lg:hidden w-8.5 h-8.5 flex items-center justify-center"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} color="black" />
        </button>

        {/* Desktop logo */}
        <Link
          href="/"
          className="hidden lg:flex items-center h-7.75 leading-none select-none"
        >
          <span className="font-nep text-xl md:text-2xl font-extrabold tracking-[-0.48px] text-[#111110]">
            गोर्खा
          </span>
          <span className="text-xl font-nep md:text-2xl ml-1 font-extrabold tracking-[-0.48px] text-[#C01C28]">
            दैनिक
          </span>
        </Link>
      </div>

      {/* Mobile logo — absolutely centered */}
      <Link
        href="/"
        className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center h-7.75 leading-none select-none"
      >
        <span className="font-nep text-xl font-extrabold tracking-[-0.48px] text-[#111110]">
          गोर्खा
        </span>
        <span className="text-xl font-nep ml-1 font-extrabold tracking-[-0.48px] text-[#C01C28]">
          दैनिक
        </span>
      </Link>

      {/* Desktop center nav */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-full items-center">
        <ul className="flex items-center gap-7 h-full">
          {navlinks.map((item) => (
            <li
              key={item.href}
              className="relative flex items-center group h-full"
            >
              <Link
                href={item.href}
                className={`flex items-center px-4 h-full font-medium text-[16.8px] transition-colors hover:bg-[#EDEAE3] ${
                  pathname === item.href
                    ? "text-[#C01C28] font-nep after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#C01C28]"
                    : "text-[#3D3B38]"
                }`}
              >
                {item.name[lang]}
                {item.icons && (
                  <span className="ml-1 text-[#8A8A8A] group-hover:text-[#555]">
                    {item.icons}
                  </span>
                )}
              </Link>

              {item.dropdown && (
                <div className="absolute top-[62px] left-0 hidden group-hover:block bg-white shadow-lg w-[250px] z-50 border-t-2 border-[#C01C28]">
                  {item.dropdown.map((d, index) => (
                    <Fragment key={d.href}>
                      <Link
                        href={d.href}
                        className="block px-6 py-3 font-nep font-medium text-[16.8px] text-[#3D3B38] hover:text-[#C01C28] hover:bg-[#EDEAE3]"
                      >
                        {d.name[lang]}
                      </Link>
                      {index === 3 && (
                        <div className="border-t border-[#EDEAE3] my-1" />
                      )}
                    </Fragment>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: breaking + search + lang */}
      <div className="flex items-center gap-3 md:gap-4">
        <Link
          href="/breaking"
          className={`h-[33px] rounded-sm px-3 flex items-center gap-[6px] bg-[#C01C28] font-bold text-white ${
            lang === "NE" ? "w-[82px]" : "w-[110px]"
          }`}
        >
          <span className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-white animate-dot-glow block" />
          {lang === "NE" ? "ब्रेकिङ" : "Breaking"}
        </Link>

        <Link href='/search' className="hidden md:w-[34px] md:h-[34px] cursor-pointer md:flex items-center justify-center rounded-md hover:bg-[#EDEAE3] transition">
          <Search size={17} className="text-[#3D3B38]" />
        </Link>

        <button
          onClick={() => setLang(lang === "NE" ? "EN" : "NE")}
          className={`hidden md:h-[31px] md:rounded-sm md:px-3 md:flex items-center justify-center cursor-pointer font-bold text-white transition ${
            lang === "NE" ? "w-9 bg-black" : "w-20 bg-[#C01C28]"
          }`}
        >
          {lang === "NE" ? "NE" : "EN|NE"}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 lg:hidden shadow-xl transform transition-transform duration-300 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Red header */}
        <div className="flex items-center font-nep justify-between px-4 h-15.5 bg-[#C01C28]">
          <span className="text-2xl font-nep font-extrabold tracking-[-0.48px] text-white">
            गोर्खा<span className="ml-1 text-white">दैनिक</span>
          </span>
          <button onClick={() => setMobileOpen(false)} className="ml-auto">
            <X size={22} color="white" />
          </button>
        </div>

        {/* Search box */}
        <div className="px-4 py-3 border-b border-[#0000001A]">
          <Link
            href="/search"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 w-full h-[40px] px-3 rounded-[6px] bg-[#EDEAE3] text-[#7A7470]"
          >
            <Search size={16} className="shrink-0 text-[#7A7470]" />
            <span className="font-nep text-[14px] leading-none">
              {lang === "NE" ? "समाचारहरू खोज्नुहोस्" : "Search news..."}
            </span>
          </Link>
        </div>

        <ul className="flex flex-col py-2">
          {navlinks.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-6 py-3 font-bold text-[16px] transition-colors hover:bg-[#EDEAE3] ${
                  pathname === item.href ? "text-[#C01C28]" : "text-[#3D3B38]"
                }`}
              >
                {index === 0 && <Home size={16} className="shrink-0" />}
                {item.name[lang]}
              </Link>

              {item.dropdown && (
                <ul className="bg-[white]">
                  {item.dropdown.map((d) => (
                    <li key={d.href}>
                      <Link
                        href={d.href}
                        onClick={() => setMobileOpen(false)}
                        className="block font-nep px-8 py-2.5 text-[15px] text-[#3D3B38] hover:text-[#C01C28] hover:bg-[#EDEAE3]"
                      >
                        {d.name[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="border-t border-[#0000001A]">
          <Link
            href="/breaking"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 px-6 py-4"
          >
            <span className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-[#C01C28] animate-dot-glow block" />
            <span className="font-nep font-bold text-[16px] text-[#C01C28]">
              {lang === "NE" ? "ब्रेकिङ समाचार" : "Breaking News"}
            </span>
          </Link>
        </div>
       <div className="px-6 py-4 border-t border-[#0000001A]">
          <button
            onClick={() => setLang(lang === "NE" ? "EN" : "NE")}
            className={`h-[31px] rounded-sm px-3 flex items-center justify-center cursor-pointer font-bold text-white transition ${
              lang === "NE" ? "w-9 bg-black" : "w-20 bg-[#C01C28]"
            }`}
          >
            {lang === "NE" ? "NE" : "EN|NE"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
