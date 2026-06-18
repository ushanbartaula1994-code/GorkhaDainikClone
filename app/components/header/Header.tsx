import Navbar from "./Navbar";
import Nepse from "./Nepse";
import Ticker from "./Ticker";


const Header = () => {
  return(
   <header>
      <main className=" pt-[70px] md:pt-[110px]">
        <Navbar />
        <Ticker />
        <Nepse />
      </main>
    </header>
  );
}

export default Header
