import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="min-h-screen relative bg-primaryBlack">
      <div className="z-10">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-primaryBlue text-[150px] top-10 left-10 font-extrabold absolute"
        >
          THE
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, type: "spring", delay: 0.5 }}
          className="text-primaryRed text-[150px] top-40 left-10 font-extrabold absolute uppercase mt-10"
        >
          experimental
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", delay: 1 }}
          className="text-primaryYellow text-[150px] top-80 left-10 font-extrabold absolute  uppercase mt-10"
        >
          paradox
        </motion.h1>
      </div>

      <div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 100 }}
          transition={{ duration: 1, delay: 2.5, repeatType: "reverse" }}
          className="z-0 top-[50%] left-[50%] w-10 h-10 rounded-full bg-black absolute felx justify-center items-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
