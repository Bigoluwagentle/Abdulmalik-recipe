import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Recipe" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;