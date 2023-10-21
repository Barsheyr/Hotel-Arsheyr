import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import AdultsDropdown from "../components/AdultsDropdown";
// import KidsDropdown from "../components/KidsDropdown";
// import CheckIn from "../components/CheckIn";
// import CheckOut from "../components/CheckOut";

// import ScrollToTop from "../components/ScrollToTop";

import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

const facilities = [
  { name: "Wifi", icon: <FaWifi /> },
  { name: "Coffee", icon: <FaCoffee /> },
  { name: "Bath", icon: <FaBath /> },
  { name: "Parking Space", icon: <FaParking /> },
  { name: "Swimming Pool", icon: <FaSwimmingPool /> },
  { name: "Breakfast", icon: <FaHotdog /> },
  { name: "GYM", icon: <FaStopwatch /> },
  { name: "Drinks", icon: <FaCocktail /> },
];

import Modal from "../components/Modal";
import Bookingnow from "../components/Bookingnow";

import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, imageLg, price } = room;

  return (
    <section className="">
      {/* <ScrollToTop /> */}

      <div className="bg-room bg-cover h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>

        <h1 className="text-6xl text-white font-primary z-20 text-center">
          {name} Details
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row py-24">
          <div className="lg:w-2/3 px-6">
            <h2 className="text-5xl mb-5">{name}</h2>
            <p className="mb-8"> {description} </p>
            <img src={imageLg} alt="" />

            {/* facilities */}

            <div className="mt-13">
              <h3 className="h3 mb-3 text-xl font-primary">Room Facilities</h3>
              <p className="mb-12 pr-36 font-secondary text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
                eveniet nam soluta illum, dolorum tempore alias doloribus minus
                exercitationem, perspiciatis sit. Atque accusantium repudiandae
                voluptatum dolores perspiciatis eum aliquid molestiae ipsa. Quos
                eius rerum libero! Minus doloremque laboriosam, nemo eum
                quisquam autem distinctio maiores eligendi maxime consequuntur
                assumenda molestias velit.
              </p>

              {/* grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  //  destructure item
                  const { name, icon } = item;
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            {/* reservation */}

            {/* <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3 className="text-3xl font-bold"> Your Reservation </h3>
              </div>
            </div> */}

            {/* rules */}

            <div>
              <h3 className="text-3xl font-bold"> Hotel Rules </h3>
              <p className="mb-6">
                Lorem ipsum dolor it amet consectetur adipisicing elit. Placeat,
                accusamus!
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 P M
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 10:030 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>

            <div className="flex flex-row item-center gap-10 mt-10">
              <div className="font-bold text-xl mt-5 text-center">
                Price : ${price}
              </div>
              <Bookingnow />
            </div>
          </div>
        </div>
      </div>

      <Modal />
    </section>
  );
};

export default RoomDetails;
