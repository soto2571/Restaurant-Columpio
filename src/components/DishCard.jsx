import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const DishCard = ({ project, isSelected, onClick }) => {
  return (
    <div
      className="cursor-pointer rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl  p-4"
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2 w-full"
      />

      {/* Title & Arrow */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="mb-1 text-2xl font-bold tracking-tighter text-white">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-300">{project.description}</p>
        </div>

        {/* Arrow Icon */}
        <motion.div
          animate={{ rotate: isSelected ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white"
        >
          <FaChevronDown size={20} />
        </motion.div>
      </div>

      {/* Expandable Menu Items */}
      <AnimatePresence>
        {isSelected && project.items && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 p-4 backdrop-blur-lg bg-black/50 text-white rounded-xl shadow-lg"
          >
            <h4 className="text-lg font-semibold">Menu Items:</h4>
            <ul className="mt-2 space-y-2">
              {project.items.map((item, idx) => (
                <li key={idx} className="text-sm border-b border-white/20 pb-2">
                  - {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DishCard;