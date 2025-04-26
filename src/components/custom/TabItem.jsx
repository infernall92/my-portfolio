/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const TabItem = ({ tab, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`group flex items-center hover:text-slate-300 ${
        isActive ? "text-slate-300" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.span
        className="inline-block h-[0.5px] mr-3"
        initial={false}
        animate={{
          backgroundColor: isActive || isHovered ? "#CBD5E1" : "#64748B",
          width: isActive || isHovered ? "80px" : "40px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {tab.label}
    </li>
  );
};

export default TabItem;
