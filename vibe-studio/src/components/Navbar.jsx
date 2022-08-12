import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const NavContainer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  z-index: 6;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ease 0.3s;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: ${(props) => props.theme.navHeight};
  padding: 0 10rem;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const MenuBtn = styled(motion.li)`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style-type: none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  cursor: pointer;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 500;
  text-transform: uppercase;
`;

const itemVarients = {};

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 2, delay: 2 }}
      click={click}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragSnapToOrigin
        dragElastic={0.05}
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New Arrival
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
