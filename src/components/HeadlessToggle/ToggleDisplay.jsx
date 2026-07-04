import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleDisplay({ children }) {
  const { on, toggle } = useContext(ToggleContext);

  if (!children || typeof children !== "function") {
    throw new Error("You must pass ToggleDisplay a function as a child");
  }

  return children(on, toggle);
}
