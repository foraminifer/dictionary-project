import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary
        <br />
        <span className="sub-header">[ dik-shuh-ner-ee ]</span>
      </header>
      <div className="container">
        <main>
          <Dictionary defaultKeyword="nature" />
        </main>
      </div>
      <footer>
        <a
          href="https://github.com/foraminifer/dictionary-project"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
        <span> by Amber Rutter</span>
      </footer>
    </div>
  );
}
