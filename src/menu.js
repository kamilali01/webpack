import './CSSs/menu.css';

export default function Menu(){
    const content = document.getElementById("content");
    content.innerHTML = `
    <div id="menu-main">
            <h1>Our Menu</h1>
            <div id="solid-stick"></div>
            <h2>Appetizers</h2>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Bruschetta</p>
                <p class="amount">9$</p>
                </div>
                <p class="ingredients">Toasted bread topped with tomatoes, fresh basil, and mozzarella</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Calamari</p>
                <p class="amount">12$</p>
                </div>
                <p class="ingredients">Crispy fried calamari served with marinara sauce</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Mushrooms</p>
                <p class="amount">10$</p>
                </div>
                <p class="ingredients">Baked mushroom caps filled with herb stuffing</p>
                <div id="dotted-stick"></div>
            </label>

            <h2>Soups & Salads</h2>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Italian Wedding Soup</p>
                <p class="amount">7$</p>
                </div>
                <p class="ingredients">Traditional soup with mini meatballs and spinach</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Caesar Salad</p>
                <p class="amount">9$</p>
                </div>
                <p class="ingredients">Crisp romaine, croutons, and parmesan</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>

            <h2>Main Courses</h2>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Filet Mignon</p>
                <p class="amount">34$</p>
                </div>
                <p class="ingredients">8oz center cut tenderloin with red wine reduction</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Spaghetti Carbonara</p>
                <p class="amount">18$</p>
                </div>
                <p class="ingredients">Classic pasta with pancetta and parmesan</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Grilled Salmon</p>
                <p class="amount">26$</p>
                </div>
                <p class="ingredients">Fresh salmon with lemon butter sauce</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>

            <h2>Desserts</h2>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Tiramisu</p>
                <p class="amount">8$</p>
                </div>
                <p class="ingredients">Classic Italian dessert with coffee-soaked ladyfingers</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>
            <label class="food">
                <div id="dotted-stick"></div>
                <div class= "name-prize">
                <p class="food-name">Chocolate Lava Cake</p>
                <p class="amount">9$</p>
                </div>
                <p class="ingredients">Warm cake with a molten center and vanilla gelato</p>
                <div id="dotted-stick"></div>
            </label>
            <div class="gaps"> </div>
        </div>
    `;
}