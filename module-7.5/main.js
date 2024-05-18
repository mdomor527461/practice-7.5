document.getElementById("btn").addEventListener("click",(event) =>{
    userInput = document.getElementById("user-input").value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
    .then(res => res.json())
    .then(data => displayData(data));
});
const displayData = (meals)=>{
    console.log(meals);
    let container = document.getElementById("card-container");
    container.innerHTML = '';
    if(meals.meals == null){
        container.innerHTML = `
        <h1 class = "error">Sorry foodItem Not Found</h1>
        `;
    }
    for(const element of meals.meals){
       
        console.log(element);
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =  `
            <img src = "${element.strMealThumb}" class="card-img">
            <p>${element.idMeal}</p>
            <h3>${element.strMeal.slice(0,20)}</h3>
            `;
        container.appendChild(div);
    }
    
    // meals.Array.forEach((element) => {
        //     div.innerHTML =  `
        //     <div class="food">${element}</div>
        //     `;
        //     container.appendChild(div);
        // })
        const cards = document.querySelectorAll('.card');

        // Iterate over the NodeList and add a click event listener to each element
        cards.forEach(card => {
          card.addEventListener('click', () => {
            const id = card.querySelector('p').innerText;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => displaySingleData(data))
            // Perform any other actions here
          });
        });
}
const displaySingleData = (meals)=>{
    console.log(meals);
    let container = document.getElementById("card-container");
    container.innerHTML = '';
    if(meals.meals == null){
        container.innerHTML = `
        <h1 class = "error">Sorry foodItem Not Found</h1>
        `;
    }
    for(const element of meals.meals){
       
        console.log(element);
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =  `
            <img src = "${element.strMealThumb}" class="card-img">
            <p> id : ${element.idMeal}</p>
            <h3>Name : ${element.strMeal.slice(0,20)}</h3>
            <h6>Area : ${element.strArea}</h6>
            <h6>Category : ${element.strCategory}</h6>
            <h6> Ingredient1 : ${element.strIngredient1}</h6>
            <h6>Ingredient2 : ${element.strIngredient2}</h6>
            <h6>Ingredient3: ${element.strIngredient3}</h6>
            `;
        container.appendChild(div);
    }
}
