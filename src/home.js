import "./CSSs/home.css";

export default function Home(){
    const content = document.getElementById("content");
    content.innerHTML = `<div id="main-part">
            <div id="container">
                <h1>Welcome to Our Restaurant</h1>
                <p>Experience the best dining experience with us.</p>
            </div>
        </div>`;
}