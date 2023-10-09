import "./App.css";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <main className="container">
      <header>
        <Header />
      </header>
      <div>
        <Body />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
