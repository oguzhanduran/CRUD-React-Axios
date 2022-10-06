import "./App.css";
import Create from "./components/create/Create.js";
import Read from "./components/read/Read";
import Delete from "./components/delete/Delete";
import Update from "./components/update/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h3>React Crud Operations</h3>
      {/* Bu kısıma ekranda sürekli görünmesini istediğimiz componentleri veya tag'leri ekleyebiliriz. */}
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
