import "./App.css";
import Menu from "./components/Menu/index";

function App() {
  const sports = ["Tennis", "Racquetball", "Pickleball", "Squash"];

  return (
    <Menu>
      <Menu.Button>Sports</Menu.Button>
      <Menu.Dropdown>
        {sports.map((sport) => (
          <Menu.Item key={sport}>{sport}</Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export default App;
