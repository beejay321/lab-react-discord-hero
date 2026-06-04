import "./App.css";
import background from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <details>
        <summary>Click here to see the image</summary>

        <hr></hr>

        <p align="center">
          <img src={background} />
        </p>
      </details>
    </div>
  );
}
export default App;
