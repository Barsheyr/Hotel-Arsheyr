import Room1Img from "../src/assets/images/pic-1.jpg";
import Room1ImgLg from "../src/assets/images/pic-1-lg.jpg";
import Room2Img from "../src/assets/images/pic-2.jpg";
import Room2ImgLg from "../src/assets/images/pic-2-lg.jpg";
import Room3Img from "../src/assets/images/pic-3.jpg";
import Room3ImgLg from "../src/assets/images/pic-3-lg.jpg";
import Room4Img from "../src/assets/images/pic-4.jpg";
import Room4ImgLg from "../src/assets/images/pic-4-lg.jpg";
import Room5Img from "../src/assets/images/pic-5.jpg";
import Room5ImgLg from "../src/assets/images/pic-5-lg.jpg";
import Room6Img from "../src/assets/images/pic-6.jpg";
import Room6ImgLg from "../src/assets/images/pic-6-lg.jpg";
import Room8Img from "../src/assets/images/pic-8.jpg";
import Room8ImgLg from "../src/assets/images/pic-8-lg.jpg";
import Room9Img from "../src/assets/images/pic-9.jpg";
import Room9ImgLg from "../src/assets/images/pic-9-lg.jpg";
import Room10Img from "../src/assets/images/pic-10.jpg";
import Room10ImgLg from "../src/assets/images/pic-10-lg.jpg";

export const header = {
  logo: "ARSHEYR",
  btnText: "Request a demo",
};

export const nav = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "ROOMS", href: "/" },
  { name: "CONTACT", href: "/" },
  { name: "PAYMENT", href: "/" },
];

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

// FEATURED DATA
export const featureDatas = [
  {
    id: 1,
    name: "Superior Suite Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    size: 10,
    maxPerson: 5,
    price: 2033,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Deluxe Suite Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    size: 10,
    maxPerson: 5,
    price: 1020,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Luxury Suite Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    size: 10,
    maxPerson: 5,
    price: 115,
    image: Room8Img,
    imageLg: Room3ImgLg,
  },
];

// PRICING

export const pricing = {
  title: "Choose your flexible plan.",
  cards: [
    {
      // icon: PricingIcon1,
      title: "Weekly Plan",
      services: [
        { name: "Free Wifi" },
        { name: "Free Gym membership" },
        { name: "Breakfast, Lunch, Dinner " },
      ],
      price: "$9.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 300,
    },
    {
      // icon: PricingIcon2,
      title: "Bi-Weekly Plan",
      services: [
        { name: "Free Wifi" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
        { name: "Weekends Movie Night" },
        { name: "Laundry " },
      ],
      price: "$19.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 600,
    },
    {
      // icon: PricingIcon3,
      title: "Monthly Plan",
      services: [
        { name: "Free Wifi" },
        { name: "Free Gym membership" },
        { name: "Breakfast, Lunch, Dinner " },
        { name: "Weekends Movie Night" },
        { name: "Laundry " },
        { name: "Nursery for Kids " },
        { name: "Parking" },
      ],
      price: "$29.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 900,
    },
  ],
};

// ROOM DATA
export const roomData = [
  {
    id: 1,
    name: "Superior Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    // facilities: [
    //   { name: "Wifi", icon: <FaWifi /> },
    //   { name: "Coffee", icon: <FaCoffee /> },
    //   { name: "Bath", icon: <FaBath /> },
    //   { name: "Parking Space", icon: <FaParking /> },
    //   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    //   { name: "Breakfast", icon: <FaHotdog /> },
    //   { name: "GYM", icon: <FaStopwatch /> },
    //   { name: "Drinks", icon: <FaCocktail /> },
    // ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Signature Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    // facilities: [
    //   { name: "Wifi", icon: <FaWifi /> },
    //   { name: "Coffee", icon: <FaCoffee /> },
    //   { name: "Bath", icon: <FaBath /> },
    //   { name: "Parking Space", icon: <FaParking /> },
    //   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    //   { name: "Breakfast", icon: <FaHotdog /> },
    //   { name: "GYM", icon: <FaStopwatch /> },
    //   { name: "Drinks", icon: <FaCocktail /> },
    // ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Deluxe Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    // facilities: [
    //   { name: "Wifi", icon: <FaWifi /> },
    //   { name: "Coffee", icon: <FaCoffee /> },
    //   { name: "Bath", icon: <FaBath /> },
    //   { name: "Parking Space", icon: <FaParking /> },
    //   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    //   { name: "Breakfast", icon: <FaHotdog /> },
    //   { name: "GYM", icon: <FaStopwatch /> },
    //   { name: "Drinks", icon: <FaCocktail /> },
    // ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: "Luxury Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    // facilities: [
    //   { name: "Wifi", icon: <FaWifi /> },
    //   { name: "Coffee", icon: <FaCoffee /> },
    //   { name: "Bath", icon: <FaBath /> },
    //   { name: "Parking Space", icon: <FaParking /> },
    //   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    //   { name: "Breakfast", icon: <FaHotdog /> },
    //   { name: "GYM", icon: <FaStopwatch /> },
    //   { name: "Drinks", icon: <FaCocktail /> },
    // ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: "Luxury Suite Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      // { name: "Wifi", icon: <FaWifi /> },
      // { name: "Coffee", icon: <FaCoffee /> },
      // { name: "Bath", icon: <FaBath /> },
      // { name: "Parking Space", icon: <FaParking /> },
      // { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      // { name: "Breakfast", icon: <FaHotdog /> },
      // { name: "GYM", icon: <FaStopwatch /> },
      // { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  // {
  //   id: 6,
  //   name: "Deluxe Room",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
  //   // facilities: [
  //   //   { name: "Wifi", icon: <FaWifi /> },
  //   //   { name: "Coffee", icon: <FaCoffee /> },
  //   //   { name: "Bath", icon: <FaBath /> },
  //   //   { name: "Parking Space", icon: <FaParking /> },
  //   //   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
  //   //   { name: "Breakfast", icon: <FaHotdog /> },
  //   //   { name: "GYM", icon: <FaStopwatch /> },
  //   //   { name: "Drinks", icon: <FaCocktail /> },
  //   // ],
  //   size: 45,
  //   maxPerson: 6,
  //   price: 344,
  //   image: Room6Img,
  //   imageLg: Room6ImgLg,
  // },
  // {
  //   id: 7,
  //   name: "Luxury Room",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
  //   // facilities: [
  //   //   { name: "Wifi", icon: <FaWifi /> },
  //   //   { name: "Coffee", icon: <FaCoffee /> },
  //   //   { name: "Bath", icon: <FaBath /> },
  //   //   { name: "Parking Space", icon: <FaParking /> },
  //   //   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
  //   //   { name: "Breakfast", icon: <FaHotdog /> },
  //   //   { name: "GYM", icon: <FaStopwatch /> },
  //   //   { name: "Drinks", icon: <FaCocktail /> },
  //   // ],
  //   size: 84,
  //   maxPerson: 7,
  //   price: 389,
  //   image: Room6Img,
  //   imageLg: Room6ImgLg,
  // },
  {
    id: 8,
    name: "Deluxe Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    // facilities: [
    //   { name: "Wifi", icon: <FaWifi /> },
    //   { name: "Coffee", icon: <FaCoffee /> },
    //   { name: "Bath", icon: <FaBath /> },
    //   { name: "Parking Space", icon: <FaParking /> },
    //   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    //   { name: "Breakfast", icon: <FaHotdog /> },
    //   { name: "GYM", icon: <FaStopwatch /> },
    //   { name: "Drinks", icon: <FaCocktail /> },
    // ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];

// TESTIMONIALS

export const testimonials = {
  title: "We have millions of reviewers",
  clients: [
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      // image: AvatarImg1,
      name: "Cameron Williamson",
      position: "CEO",
      borderColor: "#000000",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      // image: AvatarImg2,
      name: "Shirley Hand",
      position: "CEO",
      borderColor: "#000000",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      // image: AvatarImg3,
      name: "Dr. Olivia Hansen",
      position: "CEO",
      borderColor: "#000000",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      // image: AvatarImg4,
      name: "Aubrey Sanford",
      position: "CEO",
      borderColor: "#000000",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      // image: AvatarImg5,
      name: "Terri Conroy",
      position: "CEO",
      borderColor: "#000000",
    },
  ],
};
