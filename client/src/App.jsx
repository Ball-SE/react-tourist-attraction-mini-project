import "./App.css";
import InputText from "./components/InputText";
// import ViewTravel from "./page/ViewTravel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputText />} />
          {/* <Route path="/viewtravel/:eid" element={<ViewTravel />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
