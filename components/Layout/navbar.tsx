"use client";

import  { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import HeaderItem from "./headerItem";
import ConsultationModal from "../modals/consultation-modal";
import { Button } from "../ui/button";

const Navbar = () => {
  const [scroll] = useState(false);

  const menuItems = [
    {
      id: "why-us",
      title: "Why Us",
      href: "/why-us",
      submenu: false,
      submenuItems: [],
    },
    {
      id: "how-it-works",
      title: "How It Works",
      href: "/how-it-works",
      submenu: false,
      submenuItems: [],
    },
    {
      id: "free consultation",
      title: "Free Consultation",
      href: "/free-consultation",
      submenu: false,
      submenuItems: [],
    },
    {
      id: "pricing",
      title: "Pricing",
      href: "/pricing",
      submenu: false,
      submenuItems: [],
    },
  ];

  return (
    <header>
      <nav
        className={`p-3  md:px-0 w-full fixed transition-all duration-300 z-50  ${
          scroll ? "bg-white shadow" : "bg-[#ffffff]"
        } `}
      >
        <div className="mx-auto lg:max-w-[1290px]">
          <div className="items-center justify-between hidden px-2 lg:flex">
            <Link className="flex items-center gap-3" href="/">
              <Image
                src={logo}
                width={0}
                height={0}
                alt="ez-web - logo"
                placeholder="blur"
                className="w-[50px] lg:w-[45px] aspect-auto"
              />
              <p className="font-medium  xl:text-[21px]">
                <span className="font-bold mr-1">Lets</span>Prenup
              </p>
            </Link>
            <ul className="flex items-center gap-4 font-semibold pl-[100px]">
              {menuItems.map((menuItem, idx) => (
                <HeaderItem key={idx} item={menuItem} />
              ))}
            </ul>

            <div className="flex items-center justify-end gap-2 font-semibold ">
              {/* <Link
                href="/contact-sales"
                className={` text-black hover:text-purple-600  hover:bg-white/[0.5] px-3 py-1 rounded-lg text-[14px] transition-all ease-in-out duration-300 `}
              >
                Contact Sales
              </Link> */}

              <ConsultationModal>
                <Button className="bg-transparent text-navy-deep font-semibold hover:bg-transparent cursor-pointer">
                  Contact Sales
                </Button>
              </ConsultationModal>

              <>
                <Link href="/signup">
                  <button
                    className={`text-white bg-gradient-to-r from-primary to-secondary rounded-lg px-5 py-2 text-[14px] transition-all ease-in-out duration-300  shadow-lg  hover:translate-y-[1px] hover:shadow-none  `}
                  >
                    Sign Up
                  </button>
                </Link>
                <Link href="/login">
                  <button
                    className={`text-black hover:text-purple-600 border rounded-lg px-6 py-2 text-[14px] transition-all ease-in-out duration-300  shadow-lg hover:translate-y-[1px] hover:shadow-none`}
                  >
                    Log In
                  </button>
                </Link>
              </>
            </div>
          </div>

          {/* mobile  */}

          {/* <div className="flex items-center justify-between md:px-4 lg:hidden">
            <Link className="flex items-center " href="/">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="ez-web - logo"
                placeholder="blur"
              />
              <span className="font-bold">Eazy</span>Connections
            </Link>

            <div
              className="flex flex-col gap-1.5 cursor-pointer"
              onClick={() => setNavOpen(true)}
            >
              <span
                className={`${
                  scroll
                    ? "bg-black"
                    : router.asPath.includes("/pricing")
                    ? "bg-black"
                    : "bg-black"
                } transition-all duration-300 h-[3px] w-[40px] rounded`}
              ></span>
              <span
                className={`${
                  scroll
                    ? "bg-black"
                    : router.asPath.includes("/pricing")
                    ? "bg-black"
                    : "bg-black"
                } transition-all duration-300 h-[3px] w-[40px] rounded`}
              ></span>
              <span
                className={`${
                  scroll
                    ? "bg-black"
                    : router.asPath.includes("/pricing")
                    ? "bg-black"
                    : "bg-black"
                } transition-all duration-300 h-[3px] w-[40px] rounded`}
              ></span>
            </div>
            <div
              className={`absolute w-full h-[100vh] bg-white left-0 top-0 p-4 ${
                navOpen ? "translate-x-0" : "-translate-x-full"
              } transition-all duration-300`}
            >
              <div className="flex justify-end py-2 items-enter">
                <Image
                  src={Close}
                  width={25}
                  height={25}
                  alt="ez-web - icon"
                  className="cursor-pointer invert-black"
                  onClick={() => setNavOpen(false)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/" onClick={() => setNavOpen(false)}>
                  Home
                </Link>
                <hr />
                {menuItems.map((menuItem, idx) => (
                  <PhoneViewMenu
                    key={idx}
                    item={menuItem}
                    setNavOpen={setNavOpen}
                  />
                ))}

                <Link
                  href="/contact-sales"
                  onClick={() => setNavOpen(false)}
                  className="text-black"
                >
                  Contact Sales
                </Link>
                <hr />
                {isDashboard ? (
                  <Link href="/">
                    <button
                      onClick={navigateToDashboard}
                      className="pb-5 text-black bg-white rounded-lg w-max"
                    >
                      Go To Account
                    </button>
                    <hr />
                  </Link>
                ) : (
                  <>
                    <Link href="/signup">
                      <button
                        onClick={() => setNavOpen(false)}
                        className="pb-5 text-black bg-white rounded-lg w-max"
                      >
                        Sign Up
                      </button>
                      <hr />
                    </Link>
                    <Link href="/login">
                      <button
                        onClick={() => setNavOpen(false)}
                        className="pb-5 text-black rounded-lg w-max"
                      >
                        Log In
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
