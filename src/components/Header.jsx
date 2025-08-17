import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./img/558186dee5bd6012136fe1a4caf6af2d.jpg";
const allA = document.querySelectorAll("a");
function Header(){
    {
        allA.forEach(item => {
            item.onclick = function(e){
                e.preventDefault();
                e.preventDefault();
                e.preventDefault();
                allA.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        })
    }
    function recipe(){
        document.querySelector("#go").click();
    }
    function Home(){
        document.querySelector("#home").click();
    }
    return(
        <div id="header">
            <header>
                <img src={Logo} alt="logo" />
                <div>
                    <a href="#" className="active" onClick={Home}>HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#" onClick={recipe}>RECIPE</a>
                </div>
                <button onClick={recipe}>Browse Recipe</button>
            </header>
            <Link to="/Recipe" id="go"></Link>
            <Link to="/" id="home"></Link>
        </div>
    )
}
export default Header;