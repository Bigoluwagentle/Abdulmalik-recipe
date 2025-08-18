import "./Main.css";
import Cooker from "./img/baba.jpg";
import Okurin from "./img/okunrin.jpg";
import { Link } from "react-router-dom";
function Main(){
    function recipe(){
        document.querySelector("#go").click();
    }
    return(
        <div id="main">
            <nav>
                <h1>Healthy meals, zero fuss</h1>
                <p>Discover eight quick, whole-food recipe that you cook tonight no proceessed junk, no guesswork</p>
                <button onClick={recipe}>Start exploring</button>
            </nav>
            <div>
                <img src={Cooker} alt="" />
            </div>
            <section id="about">
                <h2>What you'll get</h2>
                <nav>
                    <div>
                        <i class="fa-solid fa-bore-hole"></i>
                        <h4>Whole-food recipe</h4>
                        <p>Each dish use everyday, unprocessed ingredients</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-bomb"></i>
                        <h4>Minimum fuss</h4>
                        <p>Each dish use everyday, unprocessed ingredients</p>
                    </div>
                    <div>
                        <i class="fa-brands fa-searchengin"></i>
                        <h4>Search in seconds</h4>
                        <p>Each dish use everyday, unprocessed ingredients</p>
                    </div>
                </nav>
            </section>

            <main>
                <nav>
                    <h4>Built for real life</h4>
                    <p>Cooking shouldn't be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.</p>
                    <p>Whether you're new to new to the kitchen or just need fresh ideas, we're got you covered. </p>
                </nav>
                <img src={Okurin} alt="Image of someoen cutting vegetables" />
            </main>

            <summary>
                <h4>Ready to cook smarter?</h4>
                <p>Hit the button, pick a recipe and get dinner on the table fast</p>
                <button onClick={recipe}>Browse Recipe</button>
            </summary>
            <Link to="/Recipe" id="go"></Link>
        </div>
    )
}
export default Main;