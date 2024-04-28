import {BrowserRouter ,Routes} from "react-router-dom"
import './App.css';

import {renderRoute} from "./Root"
function App() {
  return (
    <BrowserRouter>
    <Routes>
       
       {renderRoute()}
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
