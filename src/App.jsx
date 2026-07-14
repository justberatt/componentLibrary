import "./App.css";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  const sports = ["Tennis", "Racquetball", "Pickleball", "Squash"];

  return (
    <>
      <Star />

      <br />
      <hr />
      <br />
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
