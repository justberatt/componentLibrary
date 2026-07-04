import Toggle from "../HeadlessToggle/index";

export default function Menu({ children }) {
  return (
    <Toggle>
      <div className="menu">{children}</div>
    </Toggle>
  );
}
