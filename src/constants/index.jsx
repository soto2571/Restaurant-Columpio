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
  { text: "Visit Us", targetId: "info" },
  { text: "Reservation", targetId: "reservation" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
];

export const MENU = [
  {
    image: menu1,
    title: "Pancake Lovers",
    description: "El Festín de Pancakes de El Columpio. Una selección irresistible de pancakes artesanales.",
    items: [
      "Pancakes Clásicos – Esponjosos con miel, frutas o sirope.",
      "Pancakes de la Casa – Miel de abeja, canela, almendras y frutos rojos.",
      "Pancakes de Chocolate & Avellanas – Cacao puro, crema de avellanas y fresas.",
      "Pancakes de Red Velvet – Con crema de queso y sirope de frutos rojos.",
      "Pancakes de Dulce de Leche & Canela – Dulce de leche casero, canela y nueces.",
      "Pancakes de Guineo & Nueces – Guineo maduro, nueces caramelizadas y miel.",
      "Pancakes de Coco & Piña – Inspirados en la piña colada con coco rallado.",
      "Pancakes de Limón & Blueberry – Con glaseado ligero de limón y crema batida.",
      "Pancakes Strawberry Shortcake – Con fresas maceradas, crema batida y galleta.",
      "Birthday Pancakes – Con chispas de colores, sirope de vainilla y velita.",
      "Pancakes de Calabaza & Especias – Puré de calabaza, canela, jengibre y nueces.",
      "Pancakes de Zanahoria & Nuez – Inspirados en el bizcocho de zanahoria.",
      "Pancakes de Matcha & Chocolate Blanco – Servidos con chocolate blanco y almendras.",
      "Pancakes de Vainilla & Almendras – Con esencia de vainilla y coulis de frutos rojos."
    ]
  },
  {
    image: menu3,
    title: "Coffee Indulgence",
    description: "El Arte del Café en El Columpio. Una selección de bebidas para los amantes del café.",
    items: [
      "Espresso Clásico – Pequeño pero potente, el alma del café.",
      "Doble Espresso – Un golpe extra de energía.",
      "Velvet Latte – Espresso con leche vaporizada y vainilla.",
      "Caramel Bliss Latte – Café con leche y caramelo salado.",
      "Hazelnut Dream Latte – Espresso con avellana dulce.",
      "Choco Affogato – Espresso sobre helado de vainilla.",
      "Dulce Canela Latte – Con leche, canela y miel.",
      "Pumpkin Spice Latte – Sabor otoñal con especias y calabaza.",
      "Golden Honey Cappuccino – Espresso, espuma de leche y miel.",
      "Mocha Lovers – Espresso con chocolate oscuro y crema batida.",
      "Tuxedo Mocha – Mezcla de chocolates blanco y oscuro con espresso.",
      "Mexican Mocha – Espresso con chocolate y especias.",
      "Cold Brew El Columpio – Café infusionado en frío 24 horas.",
      "Iced Latte Supreme – Espresso con leche fría y vainilla o caramelo.",
      "Iced Mocha Delight – Espresso, leche y chocolate frío.",
      "Cookies & Cream Coffee Frappe – Espresso con galletas trituradas.",
      "Caramel Crunch Frappe – Café con caramelo, toffee y crema batida.",
      "Tiramisú Frappe – Inspirado en el postre italiano.",
      "Nutella Espresso Frappe – Espresso con Nutella y avellanas.",
      "White Mocha Frappe – Espresso, chocolate blanco y leche batida."
    ]
  },
  {
    image: menu2,
    title: "Desayunos Deliciosos",
    description: "El Sabor del Mañana en Cada Bocado. Un desayuno único y delicioso.",
    items: [
      "Classic Omelet – Huevos rellenos de jamón, queso y cebollas caramelizadas.",
      "Omelet Mediterráneo – Espinacas, tomates secos, queso feta y aceitunas.",
      "Omelet de Setas & Queso de Cabra – Setas salteadas y queso de cabra.",
      "Omelet de Aguacate & Bacon – Aguacate, bacon y queso cheddar.",
      "Scrambled Eggs Clásicos – Huevos revueltos con papas, tocino o salchichas.",
      "Scrambled Eggs con Queso – Huevos revueltos con queso cheddar y guacamole.",
      "Scrambled Eggs a la Mexicana – Con pimientos, cebollas y salsa picante.",
      "Eggs Benedict Clásico – Huevos pochados sobre muffin inglés con tocino.",
      "Eggs Florentine – Huevos pochados sobre espinacas y muffin inglés.",
      "Eggs Benedict con Bacon – Huevos pochados sobre muffin inglés con bacon.",
      "Pancakes & Huevos – Pancakes esponjosos con huevos revueltos y tocino.",
      "Bagel de Salmón Ahumado – Bagel tostado con queso crema y salmón.",
      "Avocado Toast con Huevo frito – Tostadas con aguacate, tomate y huevo frito."
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
        "Enjoy a delightful mix of breakfast and lunch favorites, featuring fresh ingredients and comforting flavors.",
    },
    {
      number: "02.",
      image: coffee,
      title: "Coffee",
      description:
        "Savor the rich aromas and bold flavors of expertly crafted coffee, made from the finest beans.",
    },
    {
      number: "03.",
      image: pastry,
      title: "Pastry",
      description:
        "Indulge in a selection of freshly baked pastries, from buttery croissants to sweet, flaky treats.",
    },
  ];

export const REVIEW = {
  name: "Maritza Vazquez",
  profession: "Owner",
  content:
    "“En El Columpio cultivamos la pasión por el café y la repostería artesanal, honrando su historia y el arte detrás de cada creación. Inspirados en la calidez de la familia y el amor por lo que hacemos, ofrecemos una experiencia única donde cada sorbo y cada bocado conectan con tradición y excelencia. Más que un café, somos un espacio de aprendizaje y crecimiento, donde a través de nuestros cursos de barismo, motivamos a otros a soñar en grande y alcanzar sus metas, elevando la cultura del café, la repostería y el conocimiento en cada persona que nos visita.”",
};

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/elcolumpio.rinconpr?mibextid=LQQJ4d",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/el_columpio_coffee?igsh=MTM0ZGRkYnJza2s1Ng==",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  
];
