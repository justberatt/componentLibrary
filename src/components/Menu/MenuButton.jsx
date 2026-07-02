import { useContext } from "react";
import { MenuContext } from "./Menu";
import Button from "../Button/Button";

export default function MenuButton({ children }) {
  const { toggle } = useContext(MenuContext);
  return <Button onClick={toggle}>{children}</Button>;
}
