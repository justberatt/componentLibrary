import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";

function App() {
  const sports = ["Tennis", "Racquetball", "Pickleball", "Squash"];

  return (
    <main>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown items={sports} />
      </Menu>
    </main>
  );
}

export default App;
