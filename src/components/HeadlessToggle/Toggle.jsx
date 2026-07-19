import { createContext, useState, useEffect } from "react";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffect(() => {
    onToggle();
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
