import Button from "../Button/Button";
import Toggle from "../HeadlessToggle/index";

export default function MenuButton({ children }) {
  return (
    <Toggle.Button>
      <Button>{children}</Button>
    </Toggle.Button>
  );
}
