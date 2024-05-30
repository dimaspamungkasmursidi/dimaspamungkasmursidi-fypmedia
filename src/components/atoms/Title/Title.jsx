import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = (props) => {
  const { children } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.h1
        className="font-bold text-4xl border-b-2 pb-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.h1>
    </div>
  );
};

export default Title;
