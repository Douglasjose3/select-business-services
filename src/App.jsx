import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
