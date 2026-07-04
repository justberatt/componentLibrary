import { useContext } from "react";
import { ToggleContext } from "./Toggle";
export default function ToggleButton({ children }) {
  const { on, toggle } = useContext(ToggleContext);
  return <div onClick={toggle}>{children}</div>;
}
