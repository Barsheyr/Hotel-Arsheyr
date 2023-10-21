import React from "react";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

import Modal from "../components/Modal";
import Bookingnow from "../components/Bookingnow";

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] lg:px-0 px-10 group relative">
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="group-hover:scale-110 transition-all duration-300 w-[100%] h-[30vh]"
        />
      </div>

      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between  w-[80%]">
          {/* size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>

            <div className="flex gap-x-1">
              <div>Size</div>
              <div> {size} </div>
            </div>
          </div>
          {/* room capacity */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>

            <div className="flex gap-x-1">
              <div> Max People </div>
              <div> {maxPerson} </div>
            </div>
          </div>
        </div>
      </div>

      {/* name */}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="text-4xl"> {name}</h3>
        </Link>
        <p className="text-sm pt-5 max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>

      {/* btn */}
      <div className="font-bold text-xl mt-10 text-center">
        Price : ${price}
      </div>
      <Link
        to={`/room/${id}`}
        // className="btn bg-black btn-sm max-w-[240px] py-10 mx-auto rounded-md"
        className="bg-black text-white py-2 mb-10 mx-auto max-w-[200px] flex items-center justify-center rounded-md"
      >
        Room Details
      </Link>

      <Modal />
    </div>
  );
};

export default Room;
