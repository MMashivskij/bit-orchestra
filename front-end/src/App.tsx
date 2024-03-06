import Router from "./Router"
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navagation";

function App() {

  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <Router />
    </BrowserRouter>
  )
}

export default App
