"use client";
import React, { useState } from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { FaUserFriends } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";

function ChoseType({
  headers,
  changeComponent,
  activeComponent,
  className,
  icon,
}) {
  const [activeIndex, setActiveIndex] = useState(
    headers.indexOf(activeComponent)
  );

  return (
    <div
      className={twMerge(
        "bg-white/50 p-2 rounded-md w-11/12 sm:w-full my-8 flex flex-row",
        className
      )}
    >
      {headers.map((header, idx) => (
        <div
          onClick={() => {
            setActiveIndex(idx);
            changeComponent(header);
          }}
          key={idx}
          className={classnames(
            "flex flex-1 items-center transition-all duration-200 ease-in-out cursor-pointer py-3 rounded-xl text-md font-semibold justify-center whitespace-nowrap",
            activeIndex === idx && "bg-white/50 shadow-xl text-premiumOrange",
            activeIndex !== idx && " text-gray-600"
          )}
        >
          {header === "Takip ettiklerim" && (
            <FaUserFriends className="mr-3 text-xl" />
          )}
          {header === "Keşfet" && <FaRegCompass className="mr-3 text-xl" />}
          {header === "Kaydedilenler" && <FaRegSave className="mr-3 text-xl" />}
          {header}
        </div>
      ))}
    </div>
  );
}

export default ChoseType;
