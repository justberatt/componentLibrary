import { useContext } from "react";
import { MenuContext } from "./Menu";
import Button from "../Button/Button";

export default function MenuButton({ children }) {
  const { toggle, open, menuId } = useContext(MenuContext);
  return (
    <Button
      onClick={toggle}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}
    >
      {children}
    </Button>
  );
}
