import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProfileContent from "./Pages/content/ProfileContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<ProfileContent />} />
      </Routes>
    </>
  );
}

export default App;
