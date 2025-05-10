import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ menuItems, openMobileMenu, setOpenMobileMenu }) => {
  return (
    <div className="max-w-6xl mx-auto py-2">
      <nav className="fixed left-0 top-0 right-0 flex items-center gap-5 justify-around bg-[#0e0d0d] rounded-xl ml-5 mr-5 px-0.5  backdrop-blur-lg">
        {menuItems.leftMenuItems.map((items) => (
          <a
            href={items.link}
            className="text-blue-600 py-1.5 hidden md:block text-md font-bold hover:border hover:rounded-xl hover:border-blue-950 border-transparent px-3 outline-none  transition-all"
          >
            {items.label}
          </a>
        ))}

        <a
          href="#home"
          className="bg-blue-50/10 px-4 py-2  rounded-xl text-blue-500 text-[22px] font-bold hover:shadow-2xl "
        >
          sam<span className="text-white">.ez</span>
        </a>

        {menuItems.rightMenuItems.map((items) => (
          <a
            href={items.link}
            className="text-blue-600 py-1.5 hidden md:block text-md font-bold hover:border hover:rounded-xl hover:border-blue-950 border-transparent px-3 outline-none  transition-all duration-300"
          >
            {items.label}
          </a>
        ))}

        <div
          className="md:hidden fixed top-2 right-8 py-2 rounded-xl px-3   border block border-blue-950 text-blue-600"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          {openMobileMenu ? (
            <RxCross2 className="size-4" />
          ) : (
            <RxHamburgerMenu className="size-4" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
