import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css';
import HomePage from "./booksmoviewebsite/HomePages";
import AdminPages from "./booksmoviewebsite/AdminPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="" element={<HomePage/>}/>
       <Route path="admin" element={<AdminPages/>}/>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
