/* eslint-disable react/prop-types */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = (props) => {
  console.log(props.images[0].image);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex justify-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-96 w-72 rounded-xl bg-transparent"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-xl bg-transparent"
        >
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold flex justify-center items-center"
          >
            <img
              src={props.images[4].image}
              alt="tesla"
              className="translate-x-[70%] h-[200px]"
            ></img>
            <img
              src={props.images[3].image}
              alt="tesla"
              className="translate-x-[30%] h-[250px] z-10"
            ></img>
            <img src={props.images[2].image} alt="tesla" className="z-20"></img>
            <img
              src={props.images[1].image}
              alt="tesla"
              className="-translate-x-[30%] h-[250px] z-10"
            ></img>
            <img
              src={props.images[0].image}
              alt="tesla"
              className="-translate-x-[70%] h-[200px]"
            ></img>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
