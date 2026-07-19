import Toggle from "../HeadlessToggle/index";

export default function Menu({ children, onOpen }) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu">{children}</div>
    </Toggle>
  );
}
