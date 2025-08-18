import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Recipe" element={<Recipe/>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;