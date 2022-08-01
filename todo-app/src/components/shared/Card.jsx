import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const Card = ({ cardTitle, cardBody, cardLink }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="card w-96 bg-neutral text-neutral-content"
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardBody}</p>
          <div className="card-actions justify-end">
            <Link to={cardLink} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
