import React, { useState, createContext } from "react";

export const BookingButton = createContext();

const BookingProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <BookingButton.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </BookingButton.Provider>
  );
};

export default BookingProvider;
