import React, { useContext } from "react";

import AdultsDropdown from "../components/AdultDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components//CheckIn";
import CheckOut from "../components/CheckOut";

// loader
import { SpinnerDotted, SpinnerCircularFixed } from "spinners-react";

import { RoomContext } from "../context/RoomContext";
import Room from "../components/Room";

const Rooms = () => {
  const { rooms, loading, handleClick } = useContext(RoomContext);
  return (
    <section className="py-20">
      {/* overlay $ spinner */}
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
          <SpinnerCircularFixed color="white" />
        </div>
      )}
      <div className="container mx-auto relative">
        <div
          className="bg-black mt-10 p-4 lg:shadow-xl lg:absolute 
          lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12"
        >
          <form className="h-[300px] w-full lg:h-[100px]">
            <div className="flex flex-col w-full h-[80%] lg:flex-row">
              <div className="flex-1  border-r">
                <CheckIn />
              </div>
              <div className="flex-1  border-r">
                <CheckOut />
              </div>
              <div className="flex-1  border-r">
                <AdultsDropdown />
              </div>
              <div className="flex-1  border-r">
                <KidsDropdown />
              </div>

              <button
                onClick={(e) => handleClick(e)}
                type="submit"
                className="btn bg-slate-500 lg:h-[10vh] w-[100%]"
              >
                Check now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-5xl mt-44">
        <div className="text-center mt-16">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            HIGH CLASS
          </div>
          <h2 className="font-primary text-[45px] mb-4"> Room & Suites </h2>
        </div>
        {/* <div className="flex flex-col gap-10 lg:px-0 px-10 lg:flex-row flex-wrap"> */}
        <div className="grid grid-rows lg:grid-cols-3 gap-10 ">
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
