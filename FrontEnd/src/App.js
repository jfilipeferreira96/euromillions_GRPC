//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
