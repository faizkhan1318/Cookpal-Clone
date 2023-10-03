document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        // ... Your recipe data here ...
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];

    const recipeContainer = document.getElementById("recipeContainer");
    const searchInput = document.getElementById("searchInput");
    const showAllButton = document.getElementById("showAll");
    const showVegButton = document.getElementById("showVeg");
    const showNonVegButton = document.getElementById("showNonVeg");
    const aboveRatingButton = document.getElementById("above4");
    const belowRatingButton = document.getElementById("below4");

    // Function to display recipes
    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = "";
        recipesToDisplay.forEach((recipe) => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            // Create HTML structure for the recipe card
            // Include recipe name, image, type, time, rating, and a like button
            // Use template literals for dynamic content
            recipeCard.innerHTML = `
                <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
                <div class="recipe-info">
                    <p>${recipe.type}</p>
                    <div class="name-info">
                        <h2>${recipe.name}</h2>
                        <p>⭐ ${recipe.rating}</p>
                        
                    </div>
                    <div class="time-info">
                        <p>${recipe.time}</p>
                        <button class="like-button">${recipe.isLiked ? "❤️" : "🤍"}</button>
                    </div>
                </div>
            `;

            // Add an event listener to the like button to toggle isLiked property
            const likeButton = recipeCard.querySelector(".like-button");
            likeButton.addEventListener("click", () => {
                recipe.isLiked = !recipe.isLiked;
                likeButton.textContent = recipe.isLiked ? "❤️" : "🤍";
            });

            recipeContainer.appendChild(recipeCard);
        });
    }

    // Initial display of all recipes
    displayRecipes(recipes);

    // Search functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Filter by recipe type functionality
    showAllButton.addEventListener("click", () => {
        displayRecipes(recipes);
    });

    showVegButton.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        displayRecipes(vegRecipes);
    });

    showNonVegButton.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        displayRecipes(nonVegRecipes);
    });

    aboveRatingButton.addEventListener("click", ()=>{
        const aboveRating = recipes.filter((recipe)=> recipe.rating >= "4");
        displayRecipes(aboveRating);
    });

    belowRatingButton.addEventListener("click", ()=>{
        const belowRating = recipes.filter((recipe)=> recipe.rating < "4");
        displayRecipes(belowRating);
    });

    
});