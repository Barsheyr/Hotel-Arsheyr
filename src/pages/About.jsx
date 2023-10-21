import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <section>
      <div className="bg-room bg-contain h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>

        <h1 className="text-6xl text-white font-primary z-10 text-center">
          About Us
        </h1>
      </div>

      <div className="py-24 mx-auto max-w-5xl px-20 tracking-wider text-xl space-y-5">
        <p>
          Nestled in the heart of Lagos, our hotel offers an unforgettable
          hospitality experience that will make your stay truly exceptional.
          Whether you are visiting for business or leisure, we strive to create
          a warm and inviting ambiance that feels like a home away from home.
        </p>
        <p>
          At ARSHEYR, we take pride in our dedicated team of staff members who
          are committed to providing personalized service and attention to every
          guest. From the moment you step into our elegant lobby to the time you
          check out, we ensure that your needs are met with utmost care and
          efficiency.
        </p>

        <p>
          Our beautifully appointed rooms and suites are designed to offer the
          utmost comfort and relaxation, equipped with modern amenities to cater
          to all your needs. Wake up to stunning views of Sururlere skyline and
          indulge in the luxurious comforts we offer.
        </p>

        <p>
          Indulge your taste buds at our exquisite dining options, where our
          talented chefs prepare a delectable array of local and international
          cuisines. Whether it's a hearty breakfast to start your day or a
          romantic dinner under the stars, our dining venues offer an
          unforgettable gastronomic journey.
        </p>

        <p>
          Unwind and rejuvenate at our state-of-the-art spa and wellness center,
          where you can indulge in a range of treatments and therapies to soothe
          your senses and revitalize your body and mind.
        </p>

        <p>
          Explore the vibrant sights and sounds of Surulere with our concierge
          service, offering personalized recommendations and assistance to make
          your stay even more enriching. We look forward to welcoming you to
          ARSHEYR and creating unforgettable memories during your time with us.
          Experience the epitome of luxury and warm hospitality at our exquisite
          hotel.
        </p>

        <p>
          Your comfort is our priority, and we are here to ensure that you have
          an extraordinary stay with us. Let us take care of every detail while
          you make the most of your time in Surulere. Welcome to ARSHEYR, your
          haven of indulgence and relaxation.
        </p>
      </div>
    </section>
  );
};

export default About;
