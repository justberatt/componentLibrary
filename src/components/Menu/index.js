import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

// It might looks strange to append properties with the dot notation to
// Menu since it is a function as if it were an objects but since in
// JavaScript, under the hood everything is an object this is totally fine
Menu.Button = MenuButton;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;

export default Menu;
