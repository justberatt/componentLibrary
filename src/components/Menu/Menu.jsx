import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";

export default function Menu({ buttonText = "Menu", items }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="menu">
      <MenuButton buttonText={buttonText} onClick={toggle} />

      {open && <MenuDropdown items={items} />}
    </div>
  );
}
