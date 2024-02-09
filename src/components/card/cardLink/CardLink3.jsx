/* eslint-disable react/prop-types */
import { motion, useMotionValue, useTransform } from "framer-motion";

export const CardLink3 = ({ isHovered }) => {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

  const handleMouseMove = (event) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      animate={{ scale: isHovered ? 1.1 : 1 }} // Adjust animation properties based on isHovered state
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          perspective: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* this div can be used as the 'dotted grid' */}
        <motion.div
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            perspective: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            rotateX: isHovered ? rotateX : 0, // Apply rotation if hovered
            rotateY: isHovered ? rotateY : 0, // Apply rotation if hovered
          }}
          transition={{ velocity: 0 }}
        >
          <motion.div
            key="card"
            style={{
              borderRadius: 10,
              transformStyle: "preserve-3d",
              perspective: 800, // Set perspective on the card
              rotateX: isHovered ? cardRotateX : 0, // Apply rotation if hovered
              rotateY: isHovered ? cardRotateY : 0, // Apply rotation if hovered
            }}
            transition={{ velocity: 0 }}
          >
            <div className="">
              <img src="/hero/link1.webp" alt="link1" className=""></img>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
