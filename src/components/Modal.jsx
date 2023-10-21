import React, { useContext } from "react";
import { BookingButton } from "../context/BookingButton";

const Modal = () => {
  const { showModal, closeModal } = useContext(BookingButton);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-100 flex items-center justify-center z-50">
      <div className="bg-white text-center flex flex-col items-center justify-center p-6 rounded-lg shadow-md  w-[50%] h-[50%]">
        <h2 className="lg:text-5xl text-2xl font-semibold mb-2">
          Thank you for choosing us!
        </h2>
        <p className="text-gray-600 lg:text-2xl">
          We look forward to seeing you.
        </p>
        <button
          onClick={closeModal}
          className="mt-4 bg-black hover:bg-black text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
