import "./App.css";
import InputText from "./components/InputText";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputText />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
