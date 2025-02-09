import { useState } from "react";
import { MENU } from "../constants";
import DishCard from "./DishCard";

const Menu = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const handleSelectedMenu = (index) => {
    if (openMenus.includes(index)) {
      // Remove from openMenus (collapse it)
      setOpenMenus(openMenus.filter((i) => i !== index));
    } else {
      // Add to openMenus (expand it)
      setOpenMenus([...openMenus, index]);
    }
  };

  return (
    <section className="container mx-auto py-16" id="menu">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Menu
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {MENU.map((menuItem, index) => (
          <DishCard
            key={index}
            project={menuItem}
            isSelected={openMenus.includes(index)} // ✅ Now supports multiple open
            onClick={() => handleSelectedMenu(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;