import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, body, link }) => {
  const cardVariant = {
    initial: { opacity: 0 },
    final: { opacity: 1 },
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="initial"
      animate="final"
      whileHover={{ scale: 1.08, backgroundColor: "teal" }}
      className="card w-96 bg-neutral text-neutral-content shadow-xl"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary text-2xl ">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link to={link} role="button" className="btn btn-secondary">
            get started
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
