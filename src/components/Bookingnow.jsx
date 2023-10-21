import React, { useContext } from "react";

import { BookingButton } from "../context/BookingButton";
import { featureDatas } from "../data";

const Bookingnow = () => {
  const { openModal } = useContext(BookingButton);

  return (
    <div>
      <button
        onClick={openModal}
        className="btn bg-black hover:bg-gray-500 btn-sm max-w-[250px] py-5 mt-3 rounded-md shadow-lg text-center mx-auto"
      >
        Book Now
      </button>
    </div>
  );
};

export default Bookingnow;
