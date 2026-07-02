import { useState, createContext, useId } from "react";

const MenuContext = createContext();

export default function Menu({ children }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, toggle, menuId }}>
      <div id="menu" className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
