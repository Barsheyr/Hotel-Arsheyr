import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RoomProvider from "./context/RoomContext";
import BookingProvider from "./context/BookingButton.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookingProvider>
    <RoomProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RoomProvider>
  </BookingProvider>
);
