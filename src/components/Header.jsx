import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
            <motion.header 
                initial={{y:-100}}
                whileInView={{y:0}}
                transition={{duration:1}}
            >
                <img src={Logo} alt="logo" />
                <div>
                    <a href="#" className="active" onClick={Home}>HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#" onClick={recipe}>RECIPE</a>
                </div>
                <button onClick={Home} id="mobile">HOME</button>
                <motion.button onClick={recipe}
                    initial={{x:-100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:1, type: "spring", stiffness:400}}
                    whileHover={{scale:1.2}}
                >Browse Recipe</motion.button>
            </motion.header>
            <Link to="/Recipe" id="go"></Link>
            <Link to="/" id="home"></Link>
        </div>
    )
}
export default Header;