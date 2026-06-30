import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <main>
      <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      />
    </main>
  );
}

export default App;
