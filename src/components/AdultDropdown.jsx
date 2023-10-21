import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "1 Adult" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 Adults" },
];

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);
  return (
    <Menu as="div" className="w-full h-full bg-white">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {adults}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      <Menu.Items
        as="ul"
        className="bg-white absolute lg:w-[22%] md:w-[86.5%] w-[78%] flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setAdults(li.name)}
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-[#aa8453] hover:text-black w-full  flex justify-center items-center cursor-pointer overflow-hidden"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
