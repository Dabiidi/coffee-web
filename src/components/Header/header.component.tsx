import { motion } from "framer-motion";
import { fadeIn } from "../../styles/variants";
import "./header-style.css";
export const Header = () => {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="header"
    >
      {/* <span className="header-logo">Coffee</span> */}
      <ul className="header-menu">
        <li>HOME</li>
        <li>SHOP</li>
        <li>MENU</li>
        <li>ABOUT</li>
      </ul>
      {/* <span className="header-account">My Account</span> */}
    </motion.nav>
  );
};
