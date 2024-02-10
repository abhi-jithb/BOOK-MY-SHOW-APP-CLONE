import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Bangalore <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <> 
    <div className="w-10 h-10">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.hindustantimes.com%2Fimg%2F2021%2F06%2F11%2F550x309%2F1609147522_O1aw88_BMS_1623383036467_1623383052836.jpg&tbnid=xXbs_ez-xnsCDM&vet=12ahUKEwio6vKFrKGEAxVWZ2wGHR3sDdQQMygBegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Fbusiness%2Fbookmyshow-lays-off-200-employees-amid-covid-19-ceo-urges-new-home-for-staff-101623381310838.html&docid=8242fGixYG7MzM&w=549&h=309&q=bookmyshow&ved=2ahUKEwio6vKFrKGEAxVWZ2wGHR3sDdQQMygBegQIARBv" alt="logo" className="w-full h-full" />
          </div>
    
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
      />
    </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
    {/* Small Screen Navbar */}
    <div className="md:hidden "><NavSm/></div>

    {/* Medium Screen Navbar */}
    <div className="hidden md:flex lg:hidden"> <NavMd /> </div>

    {/* Large Screen Navbar */}
    <div className="hidden lg:flex md:hidden"> <NavLg /> </div>
    </nav>
  )
};

export default Navbar;