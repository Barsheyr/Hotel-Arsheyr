import React from "react";
import Rooms from "../components/Rooms";

const RoomPage = () => {
  return (
    <div>
      <div className="bg-roompage bg-contain h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>

        <h1 className="text-6xl text-white font-primary z-10 text-center">
          ROOMS
        </h1>
      </div>
      <Rooms />
    </div>
  );
};

export default RoomPage;
