import menu1 from "../assets/brunch.jpg";
import menu2 from "../assets/sandwich.jpg";
import menu3 from "../assets/coffee.jpg";
import menu4 from "../assets/cake.jpg";
import menu5 from "../assets/drinks.jpg";


import brunch from "../assets/brunch.jpg";
import coffee from "../assets/coffee.jpg";
import pastry from "../assets/cake.jpg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Menu", targetId: "menu" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
  { text: "Reservation", targetId: "reservation" },
];

export const MENU = [
  {
    image: menu1,
    title: "Breakfast Menu",
    description: "Start your day with our delicious breakfast selection.",
    items: [
      "Scrambled Eggs with Toast",
      "Pancakes with Maple Syrup",
      "Oatmeal with Fresh Berries",
      "Avocado Toast",
      "French Croissant"
    ]
  },
  {
    image: menu2,
    title: "Sandwich & Toast Menu",
    description: "Tasty sandwiches and toasts for every craving.",
    items: [
      "Classic Club Sandwich",
      "Grilled Cheese Toast",
      "Ham & Swiss Croissant",
      "Caprese Panini",
      "Egg Salad Sandwich"
    ]
  },
  {
    image: menu3,
    title: "Coffee Menu",
    description: "Freshly brewed coffee made from the finest beans.",
    items: [
      "Espresso",
      "Latte",
      "Cappuccino",
      "Americano",
      "Iced Coffee"
    ]
  },
  {
    image: menu4,
    title: "Cake & Dessert Menu",
    description: "Sweet treats to satisfy your cravings.",
    items: [
      "New York Cheesecake",
      "Chocolate Lava Cake",
      "Strawberry Shortcake",
      "Tiramisu",
      "Macarons"
    ]
  },
  {
    image: menu5,
    title: "Drinks Menu",
    description: "Refreshing drinks and beverages.",
    items: [
      "Fresh Orange Juice",
      "Iced Lemon Tea",
      "Berry Smoothie",
      "Matcha Latte",
      "Sparkling Water"
    ]
  }
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: brunch,
    title: "Brunch",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: coffee,
    title: "Coffee",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: pastry,
    title: "Pastry",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
