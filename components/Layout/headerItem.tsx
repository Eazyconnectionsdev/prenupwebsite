"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


const HeaderItem = ({ item }: { item: any }) => {
  return (
    <li
      key={item.id}
      className={` py-5 cursor-pointer relative  xl:px-1 group`}
    >
      {!item.submenu ? (
        <Link
          href={item.href}
          className="py-8 font-normal text-[14px] xxl:text-[16px]"
        >
          {item.title}
        </Link>
      ) : (
        <div className=" text-[14px] xxl:text-[16px]">
          <div className="flex items-center gap-1">
            <p className="font-normal">{item.title}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="12"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
        </div>
      )}{" "}
      <div
        className={` ${
          item.submenu ? "group-hover:flex group-hover:opacity-100" : ""
        }  hidden opacity-0 mt-4 absolute transition duration-300 ease-in-out flex-col gap-y-2 border bg-white shadow-2xl w-max p-2  rounded`}
      >
        <ul>
          {item.submenu
            ? item.submenuItems.map((subitem : any, idx : any) => (
                <li key={idx} className="z-10">
                  <Link href={subitem.href} className="text-[12px]">
                    <div className="flex items-center gap-4   text-black hover:bg-gray-500/[0.1] hover:text-purple-500 rounded-lg p-2">
                      <div className="w-[40px] h-[40px] flex justify-center items-center">
                        {subitem.logo}
                      </div>
                      <div>
                        <p className="text-gray-800 text-[13px]">
                          {subitem.title}
                        </p>
                        <p className="text-gray-500 font-thin xxl:text-[12px] text-[10px]">
                          {subitem.subDesc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </li>
  );
}


export default HeaderItem;