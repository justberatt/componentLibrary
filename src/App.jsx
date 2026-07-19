import "./App.css";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  return (
    <>
      <Star
        onChange={() => {
          console.log("Star Toggled");
        }}
      />

      <br />
      <hr />
      <br />
      <Menu
        onOpen={() => {
          console.log("Menu Toggled");
        }}
      >
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
