import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { fadeIn } from "../../styles/variants";
import Coffee from "../../../src/assets/lotties/index";
import "./header-style.css";
import { TextAnimation } from "../ui/text-generated";

export const Header = () => {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="header-container"
    >
      <div className="header-logo">
        <Coffee />
        <TextAnimation text="Kape ni raul" />
      </div>

      <ul>
        <li>HOME</li>
        <li>SHOP</li>
        <li>MENU</li>
        <li>ABOUT</li>
      </ul>
      <DropdownMenuDemo />
    </motion.nav>
  );
};

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="header-account">My Account</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-menu-content w-56">
        <DropdownMenuLabel>Log in</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
