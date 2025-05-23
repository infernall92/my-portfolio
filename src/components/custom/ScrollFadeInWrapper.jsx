/* eslint-disable react/prop-types */
// components/custom/ScrollFadeIn.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollFadeInWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeInWrapper;
