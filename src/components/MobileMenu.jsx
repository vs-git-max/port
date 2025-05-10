import React, { useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const MobileMenu = ({ setOpenMobileMenu, openMobileMenu, menuItems }) => {
  //handling the resize issue
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet
      side="right"
      className="w-fit px-3 block "
      open={openMobileMenu}
      onOpenChange={setOpenMobileMenu}
    >
      <SheetContent
        side="left"
        className="md:hidden backdrop-blur-3xl bg-black px-3"
      >
        <SheetTitle className="text-2xl mt-5 text-white text-center font-bold">
          Menu Items
        </SheetTitle>

        {menuItems.leftMenuItems.map((item) => (
          <a
            href={item.link}
            className="text-blue-600 rounded-2xl  font-bold text-center py-1.5 text-xl border border-blue-950/60 bg-gray-50/10"
            onClick={() => setOpenMobileMenu(false)}
          >
            {item.label}
          </a>
        ))}
        {menuItems.rightMenuItems.map((item) => (
          <a
            href={item.link}
            className="text-blue-600  rounded-2xl font-bold text-center py-1.5 text-xl border border-blue-950/60 bg-gray-50/10"
            onClick={() => setOpenMobileMenu(false)}
          >
            {item.label}
          </a>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
