import Toggle from "../HeadlessToggle/index";

export default function MenuDropdow({ children }) {
  return (
    <Toggle.On>
      <div className="menu-dropdown">{children}</div>
    </Toggle.On>
  );
}
