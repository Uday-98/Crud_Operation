import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Edit from "./Component/Edit";

function App() {
  return (
    <div className="container">

<BrowserRouter>

    <Routes>
      <Route path="/" element={<Read/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
